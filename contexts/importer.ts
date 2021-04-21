import { useContext } from 'react';
import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';
import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';
import { NotificationContext } from './notification-context';
import { ProbeContext } from './probe-context';

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
          } = JSON.parse(String(reader.result));

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
    if (!item.alerts)
      return {
        ...item,
        alerts: ['status-not-2xx', 'response-time-greater-than-2000-ms'],
      };

    return item.alerts?.length === 0
      ? {
          ...item,
          alerts: ['status-not-2xx', 'response-time-greater-than-2000-ms'],
        }
      : item;
  });

  return validated;
};
