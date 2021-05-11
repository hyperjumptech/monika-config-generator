import { render } from '@testing-library/react';
import Select from '.';

describe('renders select with props', () => {
  it('render props', () => {
    const { container } = render(<Select />);
    expect(container.querySelector('select')).toBeVisible();
  });
});
