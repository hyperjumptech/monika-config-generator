export interface NotificationContextInterface<T> {
  notificationData: T[];
  handleAddNotification: (data: T) => void;
  handleRemoveNotification: (data: T) => void;
}
