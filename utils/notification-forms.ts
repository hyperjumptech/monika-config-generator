import {
  MailgunData,
  MonikaNotifData,
  SendgridData,
  SMTPData,
  TeamsData,
  TelegramData,
  WebhookData,
  WorkplaceData,
} from '@hyperjumptech/monika/lib/interfaces/data';

interface NotificationForm<T> {
  label: string;
  name: string;
  fields: NotificationFormField[];
  defaultValue: T;
}

export interface NotificationFormField {
  label: string;
  name: string;
  info?: string;
}

export const mail = [
  {
    label: 'Recipient Emails (comma separated)',
    name: 'recipients',
  },
];

export const smtpForm: NotificationForm<SMTPData>[] = [
  {
    label: 'SMTP (E-mail)',
    name: 'smtp',
    fields: [
      {
        label: 'SMTP Hostname',
        name: 'hostname',
      },
      {
        label: 'SMTP Port',
        name: 'port',
      },
      {
        label: 'SMTP Username',
        name: 'username',
      },
      {
        label: 'SMTP Password',
        name: 'password',
      },
    ].concat(mail),
    defaultValue: {
      hostname: '',
      port: 587,
      username: '',
      password: '',
      recipients: [],
    },
  },
];

export const mailgunForm: NotificationForm<MailgunData>[] = [
  {
    label: 'Mailgun',
    name: 'mailgun',
    fields: (
      [
        {
          label: 'API Key',
          name: 'apiKey',
          info: 'Lorem ipsum dolor sit amet',
        },
        {
          label: 'Domain',
          name: 'domain',
          info: 'Lorem ipsum dolor sit amet',
        },
      ] as NotificationFormField[]
    ).concat(mail),
    defaultValue: {
      apiKey: '',
      domain: '',
      recipients: [],
    },
  },
];

export const sendgridForm: NotificationForm<SendgridData>[] = [
  {
    label: 'Sengrid',
    name: 'sengrid',
    fields: (
      [
        {
          label: 'API Key',
          name: 'apiKey',
          info: 'Lorem ipsum dolor sit amet',
        },
      ] as NotificationFormField[]
    ).concat(mail),
    defaultValue: {
      apiKey: '',
      recipients: [],
    },
  },
];

export const webhookForm: NotificationForm<Omit<WebhookData, 'body'>>[] = [
  {
    label: 'Webhook',
    name: 'webhook',
    fields: [
      {
        label: 'Webhook URL',
        name: 'url',
      },
    ],
    defaultValue: {
      url: '',
    },
  },
];

export const slackForm: NotificationForm<Omit<WebhookData, 'body'>>[] = [
  {
    label: 'Slack',
    name: 'slack',
    fields: [
      {
        label: 'Incoming Webhook URL',
        name: 'url',
      },
    ],
    defaultValue: {
      url: '',
    },
  },
];

export const telegramForm: NotificationForm<Omit<TelegramData, 'body'>>[] = [
  {
    label: 'Telegram',
    name: 'telegram',
    fields: [
      {
        label: 'BOT Token',
        name: 'bot_token',
      },
      {
        label: 'Group ID',
        name: 'group_id',
      },
    ],
    defaultValue: {
      bot_token: '',
      group_id: '',
    },
  },
];

export const teamsForm: NotificationForm<Omit<TeamsData, 'body'>>[] = [
  {
    label: 'Teams',
    name: 'teams',
    fields: [
      {
        label: 'Incoming Webhook URL',
        name: 'url',
      },
    ],
    defaultValue: {
      url: '',
    },
  },
];

const monikaWhatsAppForm: NotificationForm<Omit<MonikaNotifData, 'body'>>[] = [
  {
    label: 'Monika WhatsApp Notifier',
    name: 'monika-notif',
    fields: [
      {
        label: 'Webhook URL',
        name: 'url',
      },
    ],
    defaultValue: {
      url: '',
    },
  },
];

const workplaceForm: NotificationForm<Omit<WorkplaceData, 'body'>>[] = [
  {
    label: 'Facebook Workplace',
    name: 'workplace',
    fields: [
      {
        label: 'Thread ID',
        name: 'thread_id',
      },
      {
        label: 'Access Token',
        name: 'access_token',
      },
    ],
    defaultValue: {
      thread_id: '',
      access_token: '',
    },
  },
];

export const notificationForms = [
  smtpForm,
  mailgunForm,
  sendgridForm,
  monikaWhatsAppForm,
  workplaceForm,
  slackForm,
  teamsForm,
  telegramForm,
  webhookForm,
].flat();
