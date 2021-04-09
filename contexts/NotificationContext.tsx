import { createContext, FunctionComponent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { NotificationContextInterface } from './NotificationContextInterface';
import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';

const NotificationContext = createContext<NotificationContextInterface>({
  notificationData: [],
  handleSetNotifications: () => undefined,
  handleAddNotification: () => undefined,
  handleRemoveNotification: () => undefined,
});

const NotificationProvider: FunctionComponent = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const handleSetNotifications = (notifications: Notification[]) => {
    setNotifications(notifications);
  };

  const handleAddNotification = (notification: Notification) => {
    const notifData = notifications.concat({
      ...notification,
      id: uuid(),
    });

    setNotifications(notifData);
  };

  const handleRemoveNotification = (notification: Notification) => {
    const data = notifications.filter((data) => data.id !== notification.id);

    setNotifications(data);
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationData: notifications,
        handleSetNotifications,
        handleAddNotification,
        handleRemoveNotification,
      }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
