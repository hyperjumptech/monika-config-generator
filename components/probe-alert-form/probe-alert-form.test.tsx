import { ProbeAlert } from '@hyperjumptech/monika/lib/interfaces/probe';
import { render } from '@testing-library/react';
import ProbeAlertForm from './index';

describe('render probe request form with props', () => {
  it('render props', () => {
    const fakeAlert = { assertion: '', message: '' } as ProbeAlert;
    const { container } = render(
      <ProbeAlertForm probeId="fake-id" alert={fakeAlert} alertIndex={1} />
    );
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(2);
  });
});
