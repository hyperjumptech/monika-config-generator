import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';

export interface UpdateNotificationType {
  id: string;
  type: string;
}

export interface UpdateNotificationData {
  id: string;
  field: string;
  value: string;
}

export interface NotificationContextInterface {
  notificationData: Notification[];
  handleSetNotifications: (notifications: Notification[]) => void;
  handleAddNotification: () => void;
  handleRemoveNotification: (id: string) => void;
  handleUpdateNotificationType: (type: UpdateNotificationType) => void;
  handleUpdateNotificationData: (data: UpdateNotificationData) => void;
}
