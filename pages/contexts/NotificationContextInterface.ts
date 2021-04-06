export interface NotificationContextInterface<T> {
  notificationData: T[];
  handleAddNotification: (data: T) => void;
  handleRemoveNotification: (data: T) => void;
}

interface BaseData {
  id: string;
}

interface BaseMailData {
  recipients: string[];
}

interface BaseWebhookData {
  url: string;
}

export interface SMTPData extends BaseData, BaseMailData {
  hostname: string;
  port: number;
  username: string;
  password: string;
}

export interface MailgunData extends BaseData, BaseMailData {
  apiKey: string;
  domain: string;
}

export interface SendgridData extends BaseData, BaseMailData {
  apiKey: string;
}

export interface WebhookData extends BaseData, BaseWebhookData {}

export interface SlackData extends BaseData, BaseWebhookData {}

export interface TeamsData extends BaseData, BaseWebhookData {}

export interface TelegramData extends BaseData {
  group_id: string;
  bot_token: string;
}
