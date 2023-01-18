import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';

describe('<MultipleCustomHooks>', () => {
  test('should show default view', () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    // console.log(nextButton.disabled);
    expect(nextButton.disabled).toBeTruthy();
  });
});
