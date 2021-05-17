import { render } from '@testing-library/react';
import NotifCard from '.';

describe('renders notification', () => {
  it('render props', () => {
    const { container } = render(<NotifCard id="anu-id" type="sendgrid" />);
    const form = container.querySelector('form');
    expect(form).toBeVisible();
  });
});
