import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('TodoApp', () => {
  //
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'TODO1',
        done: false,
      },
      {
        id: 2,
        description: 'TODO2',
        done: true,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('should show component correctly', () => {
    render(<TodoApp />);
    screen.debug();
    expect(screen.getByText('TODO1')).toBeTruthy();
    expect(screen.getByText('TODO2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
