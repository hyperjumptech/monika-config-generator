import { render } from '@testing-library/react';
import ProbeResponseTime from '.';

describe('renders probe-response-time with props', () => {
  it('render props', () => {
    const { getByTestId } = render(
      <ProbeResponseTime
        probeId="fake-id"
        defaultChecked={false}
        disabled={true}
      />
    );
    expect(getByTestId('checkbox-root')).toBeVisible();
    expect(getByTestId('text-input-root')).toBeVisible();
  });
});
