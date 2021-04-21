import { useContext } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';
import {
  TelegramData,
  WebhookData,
  WhatsappData,
} from '@hyperjumptech/monika/lib/interfaces/data';
import {
  Button,
  Layout,
  Select,
  SelectOption,
  Form,
  TextInput,
} from '../components';
import { useForm, FormHelper } from '../hooks/use-form';
import { NotificationContext } from '../contexts/notification-context';

type Recipient = {
  id: string;
  email: string;
};

type WhatsAppRecipient = {
  id: string;
  number: string;
};

type SelectAttribute = {
  type: string;
  label: string;
};

export default function Notifications(): JSX.Element {
  const router = useRouter();
  const formHelper = useForm({
    initialValues: {
      notificationChannel: 'email',
      recipients: [{ id: uuid(), email: '' }],
    },
  });
  const { handleSetNotifications } = useContext(NotificationContext);
  const { values, setFieldValue } = formHelper;
  const { notificationChannel } = values;
  const notificationChannels = [
    {
      type: 'email',
      label: 'Email',
    },
    {
      type: 'webhook',
      label: 'Webhook',
    },
    {
      type: 'slack',
      label: 'Slack',
    },
    {
      type: 'telegram',
      label: 'Telegram',
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
    },
    {
      type: 'teams',
      label: 'Microsoft Teams',
    },
    {
      type: 'discord',
      label: 'Discord',
    },
  ];
  const handleBack = () => {
    router.back();
  };
  const handleNext = () => {
    const notification = transformToNotificationData(values);
    handleSetNotifications(notification ? [notification] : []);
    router.push('/download');
  };

  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <Form.Item
          label="How do you want to be notified when your website is down?"
          name="notification-channel">
          <Select
            id="notification-channel"
            value={notificationChannel}
            onChange={(e) =>
              setFieldValue('notificationChannel', e.target.value)
            }>
            {notificationChannels.map((nc: SelectAttribute) => (
              <SelectOption key={nc.type} value={nc.type}>
                {nc.label}
              </SelectOption>
            ))}
          </Select>
        </Form.Item>
        {notificationChannel === 'email' && (
          <EmailChannel formHelper={formHelper} />
        )}
        {(notificationChannel === 'webhook' ||
          notificationChannel === 'slack' ||
          notificationChannel === 'teams' ||
          notificationChannel === 'discord') && (
          <WebhookChannel formHelper={formHelper} />
        )}
        {notificationChannel === 'telegram' && (
          <TelegramChannel formHelper={formHelper} />
        )}
        {notificationChannel === 'whatsapp' && (
          <WhatsAppChannel formHelper={formHelper} />
        )}
        <div className="mt-12 py-3">
          <Button onClick={handleBack} outline className="mr-7">
            Back
          </Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      </div>
    </Layout>
  );
}

function EmailChannel({ formHelper }: { formHelper: FormHelper }): JSX.Element {
  const { values, setFieldValue } = formHelper;
  const { emailService, recipients } = values;
  const emailServices = [
    { type: '', label: 'Select a method...' },
    { type: 'smtp', label: 'SMTP' },
    { type: 'mailgun', label: 'Mailgun' },
    { type: 'sendgrid', label: 'Sendgrid' },
  ];
  const isRecipientMoreThanOne = recipients?.length > 1;
  const addRecipient = () => {
    setFieldValue(
      'recipients',
      recipients
        ? [...recipients, { id: uuid(), email: '' }]
        : [{ id: uuid(), email: '' }]
    );
  };
  const updateRecipient = (id: string, email: string) => {
    setFieldValue(
      'recipients',
      recipients.map((r: Recipient) => {
        if (r.id === id) {
          return { id: r.id, email };
        }

        return r;
      })
    );
  };
  const removeRecipient = (id: string) => {
    setFieldValue(
      'recipients',
      recipients.filter((rc: Recipient) => rc.id !== id)
    );
  };

  return (
    <>
      <Form.Item
        label="What is the e-mail address to receive the notification?"
        name="recipients">
        {recipients?.map((recipient: Recipient) => (
          <div key={recipient.id} className="flex mb-2">
            <TextInput
              placeholder="monika@example.com"
              value={recipient.email}
              type="email"
              onChange={(e) => updateRecipient(recipient.id, e.target.value)}
              className={isRecipientMoreThanOne ? 'w-11/12' : 'w-full'}
            />
            {isRecipientMoreThanOne && (
              <Button className="items-center px-5" variant="text">
                <FontAwesomeIcon
                  size="lg"
                  icon={faMinusCircle}
                  onClick={() => removeRecipient(recipient.id)}
                />
              </Button>
            )}
          </div>
        ))}
        <Button variant="text" onClick={addRecipient}>
          Add another e-mail address
        </Button>
      </Form.Item>
      <Form.Item label="How to send the e-mail?" name="type">
        <Select
          id="type"
          value={emailService}
          onChange={(e) => setFieldValue('emailService', e.target.value)}>
          {emailServices.map((es: SelectAttribute) => (
            <SelectOption key={es.type} value={es.type}>
              {es.label}
            </SelectOption>
          ))}
        </Select>
        {emailService === 'smtp' && <SMTPForm formHelper={formHelper} />}
        {emailService === 'mailgun' && <MailgunForm formHelper={formHelper} />}
        {emailService === 'sendgrid' && (
          <SendgridForm formHelper={formHelper} />
        )}
      </Form.Item>
    </>
  );
}

function WebhookChannel({
  formHelper,
}: {
  formHelper: FormHelper;
}): JSX.Element {
  const { values, setFieldValue } = formHelper;
  const { url } = values;

  return (
    <Form.Item label="Webhook URL" name="url">
      <TextInput
        id="url"
        value={url}
        type="url"
        onChange={(e) => setFieldValue('url', e.target.value)}
      />
    </Form.Item>
  );
}

function TelegramChannel({
  formHelper,
}: {
  formHelper: FormHelper;
}): JSX.Element {
  const { values, setFieldValue } = formHelper;
  const { group_id, bot_token } = values;

  return (
    <>
      <Form.Item label="Group ID" name="group_id">
        <TextInput
          id="group_id"
          value={group_id}
          onChange={(e) => setFieldValue('group_id', e.target.value)}
          placeholder="-123456"
        />
      </Form.Item>
      <Form.Item label="Bot Token" name="bot_token">
        <TextInput
          id="bot_token"
          value={bot_token}
          onChange={(e) => setFieldValue('bot_token', e.target.value)}
          placeholder="abcdefg:hijklmnopqrstuvwxyz"
        />
      </Form.Item>
    </>
  );
}

function WhatsAppChannel({
  formHelper,
}: {
  formHelper: FormHelper;
}): JSX.Element {
  const { values, setFieldValue } = formHelper;
  const { recipients, url, username, password } = values;
  const isRecipientMoreThanOne = recipients?.length > 1;
  const addRecipient = () => {
    setFieldValue(
      'recipients',
      recipients
        ? [...recipients, { id: uuid(), number: '' }]
        : [{ id: uuid(), number: '' }]
    );
  };
  const updateRecipient = (id: string, number: string) => {
    setFieldValue(
      'recipients',
      recipients.map((r: Recipient) => {
        if (r.id === id) {
          return { id: r.id, number };
        }

        return r;
      })
    );
  };
  const removeRecipient = (id: string) => {
    setFieldValue(
      'recipients',
      recipients.filter((rc: Recipient) => rc.id !== id)
    );
  };

  return (
    <>
      <Form.Item label="Recipient Number" name="recipients">
        {recipients?.map((recipient: WhatsAppRecipient) => (
          <div key={recipient.id} className="flex mb-2">
            <TextInput
              value={recipient.number}
              type="tel"
              onChange={(e) => updateRecipient(recipient.id, e.target.value)}
              className={isRecipientMoreThanOne ? 'w-11/12' : 'w-full'}
            />
            {isRecipientMoreThanOne && (
              <Button className="items-center px-5" variant="text">
                <FontAwesomeIcon
                  size="lg"
                  icon={faMinusCircle}
                  onClick={() => removeRecipient(recipient.id)}
                />
              </Button>
            )}
          </div>
        ))}
        <Button variant="text" onClick={addRecipient}>
          Add another Recipient Number
        </Button>
      </Form.Item>
      <Form.Item label="URL" name="url">
        <TextInput
          id="url"
          value={url}
          type="url"
          onChange={(e) => setFieldValue('url', e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Username" name="username">
        <TextInput
          id="username"
          value={username}
          onChange={(e) => setFieldValue('username', e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <TextInput
          id="password"
          value={password}
          type="password"
          onChange={(e) => setFieldValue('password', e.target.value)}
        />
      </Form.Item>
    </>
  );
}

function SMTPForm({ formHelper }: { formHelper: FormHelper }): JSX.Element {
  const { values, setFieldValue } = formHelper;
  const { hostname, port, username, password } = values;

  return (
    <>
      <Form.Item>
        <p className="text-lg">
          Provide your SMTP server configuration.
          <br />
          Check out our docs to see an{' '}
          <a
            className="underline"
            href="https://hyperjumptech.github.io/monika/guides/notifications#example-using-gmail-smtp"
            target="_blank"
            rel="noreferrer noopenner">
            example of using Gmail SMTP server
          </a>
          .
        </p>
      </Form.Item>
      <Form.Item label="SMTP Hostname" name="hostname">
        <TextInput
          id="hostname"
          value={hostname}
          onChange={(e) => setFieldValue('hostname', e.target.value)}
          placeholder="smtp.example.com"
        />
      </Form.Item>
      <Form.Item label="SMTP Port" name="port">
        <TextInput
          id="port"
          value={port}
          type="number"
          onChange={(e) => setFieldValue('port', e.target.value)}
          placeholder="587"
        />
      </Form.Item>
      <Form.Item label="SMTP Username" name="username">
        <TextInput
          id="username"
          value={username}
          onChange={(e) => setFieldValue('username', e.target.value)}
          placeholder="email@example.com"
        />
      </Form.Item>
      <Form.Item label="SMTP Password" name="password">
        <TextInput
          id="password"
          value={password}
          onChange={(e) => setFieldValue('password', e.target.value)}
          type="password"
          placeholder="super-secret-password"
        />
      </Form.Item>
    </>
  );
}

function MailgunForm({ formHelper }: { formHelper: FormHelper }): JSX.Element {
  const { values, setFieldValue } = formHelper;
  const { apiKey, domain } = values;

  return (
    <>
      <Form.Item>
        <p className="text-lg">
          Provide your Mailgun configuration.
          <br />
          You can get the API key and the domain from{' '}
          <a
            href="https://www.mailgun.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline">
            Mailgun website
          </a>
          .
        </p>
      </Form.Item>
      <Form.Item label="API Key" name="apiKey">
        <TextInput
          id="apiKey"
          value={apiKey}
          onChange={(e) => setFieldValue('apiKey', e.target.value)}
          type="text"
          placeholder="key-xxxx"
        />
      </Form.Item>
      <Form.Item label="Domain" name="domain">
        <TextInput
          id="domain"
          value={domain}
          onChange={(e) => setFieldValue('domain', e.target.value)}
          type="text"
          placeholder="mailgun.com"
        />
      </Form.Item>
    </>
  );
}

function SendgridForm({ formHelper }: { formHelper: FormHelper }): JSX.Element {
  const { values, setFieldValue } = formHelper;
  const { apiKey } = values;

  return (
    <>
      <Form.Item>
        <p className="text-lg">
          Provide your Sendgrid configuration.
          <br />
          You can get the API key from{' '}
          <a
            href="https://sendgrid.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline">
            Sendgrid website
          </a>
          .
        </p>
      </Form.Item>
      <Form.Item label="API Key" name="apiKey">
        <TextInput
          id="apiKey"
          value={apiKey}
          onChange={(e) => setFieldValue('apiKey', e.target.value)}
          type="apiKey"
          placeholder="key-xxxx"
        />
      </Form.Item>
    </>
  );
}

function transformToNotificationData(formData: any): Notification | undefined {
  const id = uuid();
  const { notificationChannel } = formData;

  switch (notificationChannel) {
    case 'email':
      return getEmailNotificationData(id, formData);
    case 'webhook':
    case 'slack':
    case 'teams':
    case 'discord':
      return {
        id,
        type: notificationChannel,
        data: {
          url: formData?.url,
        } as WebhookData,
      };
    case 'telegram':
      return {
        id,
        type: notificationChannel,
        data: {
          group_id: formData?.group_id,
          bot_token: formData?.bot_token,
        } as TelegramData,
      };
    case 'whatsapp':
      return {
        id,
        type: notificationChannel,
        data: {
          recipients: formData?.recipients,
          url: formData?.url,
          username: formData?.username,
          password: formData?.password,
        } as WhatsappData,
      };

    default:
      break;
  }
}

function getEmailNotificationData(
  id: string,
  formData: any
): Notification | undefined {
  switch (formData?.emailService) {
    case 'smtp':
      return {
        id,
        type: formData?.emailService,
        data: {
          recipients: formData?.recipients.map(
            (recipient: Recipient) => recipient.email
          ),
          hostname: formData?.hostname,
          port: parseInt(formData?.port ?? 0),
          username: formData?.username,
          password: formData?.password,
        },
      };
    case 'mailgun':
      return {
        id,
        type: formData?.emailService,
        data: {
          recipients: formData?.recipients.map(
            (recipient: Recipient) => recipient.email
          ),
          apiKey: formData?.apiKey,
          domain: formData?.domain,
        },
      };
    case 'sendgrid':
      return {
        id,
        type: formData?.emailService,
        data: {
          recipients: formData?.recipients.map(
            (recipient: Recipient) => recipient.email
          ),
          apiKey: formData?.apiKey,
        },
      };

    default:
      break;
  }
}
