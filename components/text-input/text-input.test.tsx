import { render } from '@testing-library/react';
import TextInput from '.';

describe('renders text-input with props', () => {
  it('render props', () => {
    const { container } = render(<TextInput />);
    expect(container.querySelector('input')).toBeVisible();
  });
});
