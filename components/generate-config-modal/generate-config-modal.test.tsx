import { render } from '@testing-library/react';
import GenerateConfigModal from '.';

describe('renders modal with correct props', () => {
  it('render modal visibility', () => {
    const { container } = render(
      <GenerateConfigModal visible={false} onClose={() => {}} />
    );
    const modal = container.firstChild;
    expect(modal).toHaveClass('hidden');
  });
});
