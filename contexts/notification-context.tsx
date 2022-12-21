import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';
import { createContext, FunctionComponent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { notificationForms } from '../utils/notification-forms';
import {
  NotificationContextInterface,
  UpdateNotificationData,
  UpdateNotificationType,
} from './notification-context-interface';

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
      id: uuid(),
      type: 'desktop',
      data: undefined,
    },
  ]);

  const handleSetNotifications = (notifications: Notification[]) => {
    setNotifications(notifications);
  };

  const handleAddNotification = () => {
    const id = uuid();

    const notifData = notifications.concat({
      id,
      type: 'desktop',
      data: undefined,
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

    if (data.field === 'port') {
      selectedNotifData[data.field] = parseInt(data.value ?? 0);
    } else if (data.field === 'recipients') {
      selectedNotifData[data.field] = data.value
        ?.replace(/\s/g, '')
        ?.split(',');
    } else {
      selectedNotifData[data.field] = data.value;
    }

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
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
