import { Button } from '../';
import { render } from '@testing-library/react';

describe('renders button with correct props', () => {
  it('renders an outlined button', () => {
    const { container } = render(<Button outline />);
    const button = container.querySelector('button');
    expect(button).toHaveClass('border-2 border-purple text-purple');
  });

  it('renders a text button', () => {
    const { getByTestId } = render(<Button variant="text" />);
    expect(getByTestId('text-button')).toBeVisible();
  });
});
