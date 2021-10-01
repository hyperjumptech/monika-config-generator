import { render } from '@testing-library/react';
import Sidebar from '.';

describe('renders sidebar with props', () => {
  it('render props', () => {
    const { container } = render(
      <Sidebar
        menu={[
          { key: 'lorem', label: 'Lorem' },
          { key: 'ipsum', label: 'Ipsum' },
        ]}
        activeMenu="lorem"
      />
    );
    expect(container.firstChild).toHaveTextContent('Lorem');
    expect(container.firstChild).toHaveTextContent('Ipsum');
  });
});
