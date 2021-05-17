import { render } from '@testing-library/react';
import Textarea from '.';

describe('renders textarea with props', () => {
  it('render props', () => {
    const { container } = render(<Textarea label="fake label" />);
    expect(container.firstChild).toHaveTextContent('fake label');
    expect(container.querySelector('textarea')).toBeVisible();
  });
});
