import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';

export interface NotificationContextInterface {
  notificationData: Notification[];
  handleSetNotifications: (notifications: Notification[]) => void;
  handleAddNotification: (notification: Notification) => void;
  handleRemoveNotification: (notification: Notification) => void;
}
