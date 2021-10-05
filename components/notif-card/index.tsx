import React, { FunctionComponent, useContext } from 'react';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import kebabCase from 'lodash.kebabcase';

import { Select, SelectOption, TextInput } from '../';
import { NotificationContext } from '../../contexts/notification-context';
import {
  notificationForms,
  NotificationFormField,
} from '../../utils/notification-forms';

export interface NotifCardProps {
  id: string;
  type: string;
}

const NotifCard: FunctionComponent<NotifCardProps> = ({ id, type }) => {
  const {
    notificationData,
    handleUpdateNotificationType,
    handleUpdateNotificationData,
    handleRemoveNotification,
  } = useContext(NotificationContext);

  return (
    <div
      className="border border-solid rounded-md mb-8"
      // use id for scrolling from the sidebar
      id={`notification-${kebabCase(id)}`}>
      <div className="flex flex-row items-center justify-between p-4 bg-gray-900 bg-opacity-50 border-b">
        <p>Notification ID : {id?.split('-')[0]}</p>
        {notificationData.length > 1 && (
          <button onClick={() => handleRemoveNotification(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
      <div className="p-4 md:w-8/12 lg:w-6/12">
        <div className="mb-4">
          <Select
            label="Type"
            value={notificationData.find((notif) => notif.id === id)?.type}
            onChange={(e) => {
              handleUpdateNotificationType({ id, type: e.target.value });
            }}>
            {notificationForms.map((form) => (
              <SelectOption key={form.name} value={form.name}>
                {form.label}
              </SelectOption>
            ))}
          </Select>
        </div>
        <form>
          <fieldset>
            {notificationForms
              ?.find((form) => form.name === type)
              ?.fields.map((field: NotificationFormField) => {
                const data = notificationData.find((notif) => notif.id === id)
                  ?.data as any;

                return (
                  <div key={field.name} className="mb-4">
                    <TextInput
                      id={field.name}
                      label={field.label}
                      defaultValue={data[field.name]}
                      onChange={(event) => {
                        handleUpdateNotificationData({
                          id,
                          field: field.name,
                          value: event.target.value,
                        });
                      }}
                    />
                  </div>
                );
              })}
            {type === 'desktop' && (
              <>
                <p>There are prerequisites for using Desktop notification:</p>
                <ul className="list-disc ml-8">
                  <li>
                    macOS: {'>='} 10.8 for native notifications, or Growl if
                    earlier.
                  </li>
                  <li>
                    Linux: `notify-osd` or `libnotify-bin` installed (Ubuntu
                    should have this by default)
                  </li>
                  <li>
                    Windows: {'>='} 8, or task bar balloons for Windows {'<'} 8.
                    Growl as fallback. Growl takes precedence over Windows
                    balloons.
                  </li>
                </ul>
              </>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default NotifCard;
