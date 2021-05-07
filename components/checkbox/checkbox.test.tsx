import { Checkbox } from '../';
import { render } from '@testing-library/react';

describe('renders checkbox with correct props', () => {
  it('renders props', () => {
    const { container } = render(
      <Checkbox
        children
        help="GT 500"
        value="moto-granprix"
        name="bike"
        disabled
        defaultChecked
      />
    );
    const checkbox = container.querySelector('input');
    expect(checkbox).toHaveProperty('id', 'moto-granprix');
    expect(checkbox).toHaveProperty('name', 'bike');
    expect(checkbox).toHaveProperty('disabled', true);
    expect(checkbox).toHaveProperty('defaultChecked', true);
  });

  it('renders text', () => {
    const { getByTestId } = render(
      <Checkbox
        children
        help="GT 500"
        value="moto-granprix"
        name="bike"
        disabled
        defaultChecked
      />
    );
    expect(getByTestId('text-checkbox')).toHaveTextContent('GT 500');
  });
});
