import { createContext, FunctionComponent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  MailgunData,
  SendgridData,
  SMTPData,
  TeamsData,
  TelegramData,
  WebhookData,
  WhatsappData,
} from '@hyperjumptech/monika/lib/interfaces/data';

import { NotificationContextInterface } from './NotificationContextInterface';

type Data = (
  | MailgunData
  | SendgridData
  | SMTPData
  | TeamsData
  | TelegramData
  | WebhookData
  | WhatsappData
) & { id: string };

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
