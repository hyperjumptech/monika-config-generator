import { render } from '@testing-library/react';
import ProbeRequestForm from '.';
import { RequestConfig } from '@hyperjumptech/monika/lib/interfaces/request';

describe('render probe request form with props', () => {
  it('render props', () => {
    const fakeRequest = { url: '', body: {}, timeout: 10 } as RequestConfig;
    const { container } = render(
      <ProbeRequestForm
        probeId="fake-id"
        request={fakeRequest}
        requestIndex={1}
        requestArray={[fakeRequest]}
      />
    );
    const input = container.querySelector('input');
    const select = container.querySelector('select');
    const option = container.querySelector('option');
    const textArea = container.querySelector('textarea');
    expect(input).toBeVisible();
    expect(select).toBeVisible();
    expect(option).toBeVisible();
    expect(textArea).toBeVisible();
  });
});
