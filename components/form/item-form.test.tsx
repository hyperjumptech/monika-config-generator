import { render } from '@testing-library/react';
import Item from './item';

describe('renders item with correct props', () => {
  it('render props', () => {
    const { container } = render(<Item name="Ford" label="Stella" />);
    const itemLabel = container.querySelector('label');
    expect(itemLabel).toHaveProperty('htmlFor', 'Ford');
    expect(itemLabel).toHaveTextContent('Stella');
  });
});
