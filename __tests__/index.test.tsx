import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Router, useRouter } from 'next/router';
import Home from '../pages';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Home', () => {
  it('show home page with title', () => {
    // Arrange
    const expectedTitle = 'Monika Configuration Generator';
    const { container } = render(<Home />);

    // Act
    const legend = container.querySelector('legend');

    // Assert
    expect(legend).toHaveTextContent(expectedTitle);
  });

  it('go to what-do-you-want page after click "I`m new to Monika" then click next button', async () => {
    // Arange
    const page = render(<Home />);

    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    // Act
    const webPageOption = page.getByTestId('new');
    fireEvent.click(webPageOption);

    const nextBtn = page.getByTestId('next-button');
    fireEvent.click(nextBtn);

    // Assert
    expect(mockRouter.push).toHaveBeenCalledWith('/what-do-you-want');
  });
});
