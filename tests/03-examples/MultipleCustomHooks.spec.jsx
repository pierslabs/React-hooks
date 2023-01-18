import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('<MultipleCustomHooks>', () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show default view', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeTruthy();
  });

  test('should show default view', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Pedro', quote: 'Is the day' }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText('Is the day'));
    expect(screen.getByText('Pedro'));
  });

  test('should call increment function', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Pedro', quote: 'Is the day' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', {
      name: 'Next quote',
    });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
