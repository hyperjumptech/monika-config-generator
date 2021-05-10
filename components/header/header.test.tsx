import { render } from '@testing-library/react';
import Header from '.';

describe('renders header with correct props', () => {
  it('render mobile menu', () => {
    const { getByTestId } = render(<Header isMobileMenuCollapsed={false} />);
    expect(getByTestId('mobile-menu')).toHaveClass('hidden');
  });
});
