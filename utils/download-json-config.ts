import { Notification } from '../contexts/notification-context-interface';
import { Probe } from '../contexts/probe-context-interface';

type Props = {
  notifications: Notification[];
  probes: Probe[];
};

export const downloadJsonConfig = (jsonConfig: Props) => {
  const jsonString = JSON.stringify(jsonConfig, null, 2);

  const element = document.createElement('a');
  const file = new Blob([jsonString], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'monika.json';
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};
