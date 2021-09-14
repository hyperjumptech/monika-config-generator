import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';
import { Probe, ProbeAlert } from '@hyperjumptech/monika/lib/interfaces/probe';
import { useContext } from 'react';
import { parseAlertStringTime } from '../utils/parse-alert-string-time';
import { NotificationContext } from './notification-context';
import {
  ProbeContext,
  responseTimeGreaterThanXAlert,
  statusNot2xxAlert,
} from './probe-context';
import * as yaml from 'js-yaml'

export const useConfigFileImporter = () => {
  const { handleSetProbes } = useContext(ProbeContext);
  const { handleSetNotifications } = useContext(NotificationContext);

  return (file: File) =>
    new Promise<void>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const {
            probes,
            notifications,
          }: {
            probes?: Probe[];
            notifications?: Notification[];
          } = yaml.load(String(reader.result)) as {
            probes?: Probe[];
            notifications?: Notification[];
          };

          if (probes) {
            const finalProbes = checkProbeAlerts(probes);
            handleSetProbes(finalProbes);
          } else {
            throw new Error('something wrong in probes key');
          }

          if (notifications) handleSetNotifications(notifications);

          resolve();
        } catch (error) {
          reject(error);
        }
      };

      reader.readAsText(file);
    });
};

const checkProbeAlerts = (probes: Probe[]) => {
  const validated = probes.map((item: Probe) => {
    if (!item.alerts || item.alerts.length === 0)
      return {
        ...item,
        alerts: [statusNot2xxAlert(), responseTimeGreaterThanXAlert(2000)],
      };

    const hasLegacyStringAlert = item.alerts.some(
      (alert) => typeof alert === 'string'
    );

    // convert legacy alert string value to new object form
    if (hasLegacyStringAlert) {
      const convertedAlerts = item.alerts
        .map((alert: unknown) => {
          if (typeof alert === 'string') {
            if (alert === 'status-not-2xx') return statusNot2xxAlert();
            if (alert.startsWith('response-time-greater-than-')) {
              try {
                const ms = parseAlertStringTime(alert);
                return responseTimeGreaterThanXAlert(ms);
              } catch (error) {
                return null;
              }
            }
          }

          return alert;
        })
        // filter null value
        .filter(Boolean) as ProbeAlert[];

      return {
        ...item,
        alerts: convertedAlerts,
      };
    }

    return item;
  });

  return validated;
};
