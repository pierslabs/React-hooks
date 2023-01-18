import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../../src/09-useContext/LoginPage';

describe('LoginPage', () => {
  test('should show component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText('pre');

    expect(preElement.innerHTML).toBe('null');
  });

  test('should exec setUser when button click', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider
        value={{ user: { name: 'Pier', id: 1 }, setUser: setUserMock }}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole('button', {
      name: 'Establecer usuario',
    });

    fireEvent.click(buttonElement);

    expect(setUserMock).toHaveBeenCalledWith({
      email: 'juan@google.com',
      id: 123,
      name: 'Juan',
    });
  });
});
