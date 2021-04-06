import { createContext, FunctionComponent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  MailgunData,
  NotificationContextInterface,
  SendgridData,
  SlackData,
  SMTPData,
  TeamsData,
  TelegramData,
  WebhookData,
} from './NotificationContextInterface';

type Data =
  | SMTPData
  | MailgunData
  | SendgridData
  | WebhookData
  | SlackData
  | TeamsData
  | TelegramData;

const NotificationContext = createContext<NotificationContextInterface<Data>>({
  notificationData: [],
  handleAddNotification: (data) => data,
  handleRemoveNotification: (data) => data,
});

const NotificationProvider: FunctionComponent = ({ children }) => {
  const [notifications, setNotifications] = useState<Data[]>([]);

  const handleAddNotification = (notification: Data) => {
    const notifData = notifications.concat({
      ...notification,
      id: uuid(),
    });

    setNotifications(notifData);
  };

  const handleRemoveNotification = (notification: Data) => {
    const data = notifications.filter((data) => data.id !== notification.id);

    setNotifications(data);
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationData: notifications,
        handleAddNotification: handleAddNotification,
        handleRemoveNotification: handleRemoveNotification,
      }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
