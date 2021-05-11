import { render } from '@testing-library/react';
import Sidebar from '.';

describe('renders sidebar with props', () => {
  it('render props', () => {
    const { container } = render(
      <Sidebar
        menu={['lorem', 'ipsum']}
        activeMenu="lorem"
        onMenuChange={() => undefined}
      />
    );
    expect(container.firstChild).toHaveTextContent('lorem');
    expect(container.firstChild).toHaveTextContent('ipsum');
  });
});
