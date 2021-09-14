import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';
import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';
import * as yaml from 'js-yaml';

type Props = {
  notifications: Notification[];
  probes: Probe[];
};

export function downloadYamlConfig(jsonConfig: Props) {
  const data = yaml.dump(jsonConfig);

  const element = document.createElement('a');
  const file = new Blob([data], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'monika.yml';
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}
