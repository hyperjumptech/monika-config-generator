import { SendgridData } from '@hyperjumptech/monika/lib/interfaces/data';
import { NotificationContextInterface } from './contexts/notification-context-interface';
import {
  Probe,
  ProbeContextInterface,
} from './contexts/probe-context-interface';

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
      handleUpdateProbeAlert: () => undefined,
      handleUpdateProbeRequestPosition: () => undefined,
      handleUpdateProbeRequestEnableBody: () => undefined,
      handleUpdateProbeRequestData: () => undefined,
      handleUpdateProbeRequestBody: () => undefined,
      handleUpdateProbeRequestHeaderKey: () => undefined,
      handleUpdateProbeRequestHeaderValue: () => undefined,
      handleUpdateProbeResponseTimeAlert: () => undefined,
      handleRemoveProbeRequest: () => undefined,
      handleRemoveProbe: () => undefined,
      handleRemoveProbeRequestHeader: () => undefined,
      handleAddProbeCustomAlert: () => undefined,
      handleUpdateProbeCustomAlert: () => undefined,
    }
);
