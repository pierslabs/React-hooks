import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('<TodoReducer>', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];

  test('should return default values ', () => {
    const newstate = todoReducer(initialState, {});

    expect(newstate).toBe(initialState);
  });

  test('should add todo ', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Add new todo',
        done: false,
      },
    };

    const newstate = todoReducer(initialState, action);
    expect(newstate.length).toBe(2);
    expect(newstate).toContain(action.payload);
  });

  test('should remove todo ', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    };

    const newstate = todoReducer(initialState, action);
    expect(newstate.length).toBe(0);
  });

  test('should togle todo ', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };

    const newstate = todoReducer(initialState, action);
    expect(newstate[0].done).toBeTruthy();

    const newstate2 = todoReducer(newstate, action);
    expect(newstate2[0].done).toBeFalsy();
  });
});
