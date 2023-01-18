import { fireEvent, render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('<TodoItem>', () => {
  const todo = {
    id: 1,
    description: 'Build a robot to rule the world.',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return the pending TODO', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toEqual(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('should return the complete TODO', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should span exec toggleTodo when click ', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toBeCalled();
  });

  test('should span exec toggleTodo when click ', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByRole('button', { name: 'Borrar' });

    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toBeCalled();
  });
});
