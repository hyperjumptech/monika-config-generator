import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';
import { RequestConfig } from '@hyperjumptech/monika/lib/interfaces/request';
import { render } from '@testing-library/react';
import ProbeCard from '.';

describe('renders probe card with props', () => {
  it('render props', () => {
    const fakeRequest = { url: '', body: {}, timeout: 10 } as RequestConfig;
    const fakeProbe = {
      id: 'fake-id',
      name: 'fake-probe',
      incidentThreshold: 3,
      recoveryThreshold: 3,
      alerts: [],
      requests: [fakeRequest],
    } as Probe;
    const { container } = render(<ProbeCard id="fake-id" probe={fakeProbe} />);
    const form = container.querySelector('form');
    expect(form).toBeVisible();
  });
});
