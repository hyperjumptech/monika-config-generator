import { createContext, FunctionComponent, useState } from 'react';

import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';

import { notificationForms, smtpForm } from '../utils/notificationForms';
import {
  NotificationContextInterface,
  UpdateNotificationData,
  UpdateNotificationType,
} from './NotificationContextInterface';

const NotificationContext = createContext<NotificationContextInterface>({
  notificationData: [],
  handleSetNotifications: () => undefined,
  handleAddNotification: () => undefined,
  handleRemoveNotification: () => undefined,
  handleUpdateNotificationType: () => undefined,
  handleUpdateNotificationData: () => undefined,
});

const NotificationProvider: FunctionComponent = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'smtp',
      data: smtpForm[0].defaultValue,
    },
  ]);

  const handleSetNotifications = (notifications: Notification[]) => {
    setNotifications(notifications);
  };

  const handleAddNotification = () => {
    const notifData = notifications.concat({
      id: (notifications.length + 1).toString(),
      type: 'smtp',
      data: smtpForm[0].defaultValue,
    });

    setNotifications(notifData);
  };

  const handleUpdateNotificationType = ({
    id,
    type,
  }: UpdateNotificationType) => {
    const data = notifications.map((notif) => {
      return notif.id === id
        ? {
            id,
            type: type as any,
            data: notificationForms.find((nf) => {
              return nf.name === type;
            })?.defaultValue as any,
          }
        : notif;
    });

    setNotifications(data);
  };

  const handleUpdateNotificationData = (data: UpdateNotificationData) => {
    const selectedNotif = notifications.find((notif) => notif.id === data.id);
    const selectedNotifData = (selectedNotif?.data ?? {}) as any;
    selectedNotifData[data.field] = data.value;

    const notifData = notifications.map((notif) => {
      return notif.id === data.id
        ? {
            ...notif,
            data: selectedNotifData,
          }
        : notif;
    });

    setNotifications(notifData);
  };

  const handleRemoveNotification = (id: string) => {
    const data = notifications.filter((data) => data.id !== id);

    setNotifications(data);
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationData: notifications,
        handleSetNotifications,
        handleAddNotification,
        handleRemoveNotification,
        handleUpdateNotificationType,
        handleUpdateNotificationData,
      }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
