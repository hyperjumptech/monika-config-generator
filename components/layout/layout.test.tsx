import { render } from '@testing-library/react';
import Layout from '.';

describe('renders layout with props', () => {
  it('render layout', () => {
    const { container } = render(<Layout />);
    expect(container.querySelector('header')).toBeVisible();
    expect(container.querySelector('main')).toBeVisible();
    expect(container.querySelector('footer')).toBeVisible();
  });
});
