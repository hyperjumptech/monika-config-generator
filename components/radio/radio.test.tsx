import { render } from '@testing-library/react';
import Radio from '.';

describe('renders radio with props', () => {
  it('render props', () => {
    const { container } = render(
      <Radio children help="lorem ipsum" value="fake-id" name="fake-id" />
    );
    const input = container.querySelector('input');
    expect(input).toBeVisible();
    expect(input).toHaveAttribute('id', 'fake-id');
    expect(input).toHaveAttribute('name', 'fake-id');
    expect(container.firstChild).toHaveTextContent('lorem ipsum');
  });
});
