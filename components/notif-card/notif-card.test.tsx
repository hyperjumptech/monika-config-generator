import { SendgridData } from '@hyperjumptech/monika/lib/interfaces/data';
import { render } from '@testing-library/react';
import NotifCard from '.';
import { NotificationContext } from '../../contexts/notification-context';

describe('renders notification', () => {
  it('render props', () => {
    const { container } = render(
      <NotificationContext.Provider
        value={{
          notificationData: [
            {
              id: 'anu-id',
              type: 'sendgrid',
              data: { apiKey: 'yyyyy' } as SendgridData,
            },
          ],
          handleSetNotifications: () => undefined,
          handleAddNotification: () => undefined,
          handleRemoveNotification: () => undefined,
          handleUpdateNotificationType: () => undefined,
          handleUpdateNotificationData: () => undefined,
        }}>
        <NotifCard id="anu-id" type="sendgrid" />
      </NotificationContext.Provider>
    );
    const form = container.querySelector('form');
    expect(form).toBeVisible();
  });
});
