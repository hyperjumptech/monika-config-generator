import { render } from '@testing-library/react';
import ProbeThreshold from '.';

describe('renders probe-threshold with props', () => {
  it('render props', () => {
    const { container } = render(<ProbeThreshold probeId="fake-id" />);
    expect(container.querySelector('input')).toBeVisible();
  });
});
