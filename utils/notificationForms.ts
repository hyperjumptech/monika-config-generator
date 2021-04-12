import {
  MailgunData,
  SendgridData,
  SMTPData,
  TeamsData,
  TelegramData,
  WebhookData,
} from '@hyperjumptech/monika/lib/interfaces/data';

interface NotificationForm<T> {
  label: string;
  name: string;
  fields: NotificationFormField[];
  defaultValue: T;
}

interface NotificationFormField {
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
      port: 0,
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
    fields: ([
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
    ] as NotificationFormField[]).concat(mail),
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
    fields: ([
      {
        label: 'API Key',
        name: 'apiKey',
        info: 'Lorem ipsum dolor sit amet',
      },
    ] as NotificationFormField[]).concat(mail),
    defaultValue: {
      apiKey: '',
      recipients: [],
    },
  },
];

export const webhookForm: NotificationForm<WebhookData>[] = [
  {
    label: 'Webhook',
    name: 'webhook',
    fields: [
      {
        label: 'URL',
        name: 'url',
      },
    ],
    defaultValue: {
      url: '',
      body: {
        url: '',
        time: '',
        alert: '',
      },
    },
  },
];

export const slackForm: NotificationForm<WebhookData>[] = [
  {
    label: 'Slack',
    name: 'slack',
    fields: [
      {
        label: 'URL',
        name: 'url',
      },
    ],
    defaultValue: {
      url: '',
      body: {
        url: '',
        time: '',
        alert: '',
      },
    },
  },
];

export const telegramForm: NotificationForm<TelegramData>[] = [
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
      body: {
        url: '',
        time: '',
        alert: '',
      },
    },
  },
];

export const teamsForm: NotificationForm<TeamsData>[] = [
  {
    label: 'Teams',
    name: 'teams',
    fields: [
      {
        label: 'URL',
        name: 'url',
      },
    ],
    defaultValue: {
      url: '',
      body: {
        url: '',
        time: '',
        alert: '',
        status: '',
      },
    },
  },
];

export const notificationForms = [
  smtpForm,
  mailgunForm,
  sendgridForm,
  slackForm,
  teamsForm,
  telegramForm,
  webhookForm,
].flat();
