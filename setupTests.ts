import { SendgridData } from '@hyperjumptech/monika/lib/interfaces/data';
import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';
import { NotificationContextInterface } from './contexts/notification-context-interface';
import { ProbeContextInterface } from './contexts/probe-context-interface';

jest.mock(
  './contexts/notification-context',
  () =>
    <NotificationContextInterface>{
      notificationData: [
        {
          id: 'anu-id',
          type: 'sendgrid',
          data: <SendgridData>{ apiKey: 'yyyyy' },
        },
      ],
      handleSetNotifications: () => undefined,
      handleAddNotification: () => undefined,
      handleRemoveNotification: () => undefined,
      handleUpdateNotificationType: () => undefined,
      handleUpdateNotificationData: () => undefined,
    }
);

jest.mock(
  './contexts/probe-context',
  () =>
    <ProbeContextInterface>{
      probeData: [
        <Probe>{
          id: 'fake-id',
          name: 'fake-probe',
          incidentThreshold: 3,
          recoveryThreshold: 3,
          alerts: [{}],
          requests: [{}],
        },
      ],
      handleSetProbes: () => undefined,
      handleAddProbe: () => undefined,
      handleAddProbeRequest: () => undefined,
      handleAddProbeRequestHeader: () => undefined,
      handleUpdateProbeData: () => undefined,
      handleUpdateProbeRequestPosition: () => undefined,
      handleUpdateProbeRequestEnableBody: () => undefined,
      handleUpdateProbeRequestData: () => undefined,
      handleUpdateProbeRequestBody: () => undefined,
      handleUpdateProbeRequestHeaderKey: () => undefined,
      handleUpdateProbeRequestHeaderValue: () => undefined,
      handleRemoveProbeRequest: () => undefined,
      handleRemoveProbe: () => undefined,
      handleRemoveProbeRequestHeader: () => undefined,
      handleAddProbeAlert: () => undefined,
      handleUpdateProbeAlert: () => undefined,
      handleRemoveProbeAlert: () => undefined,
    }
);
