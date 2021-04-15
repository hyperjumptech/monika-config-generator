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

          if (probes) handleSetProbes(probes);
          if (notifications) handleSetNotifications(notifications);

          resolve();
        } catch (error) {
          reject(error);
        }
      };

      reader.readAsText(file);
    });
};
