import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';

describe('UseCounter', () => {
  test('shoud return default values ', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('shoud return initial value = 100 ', () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('shoud return (value + 1) when increment ', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(13);
  });

  test('shoud return (value - 1) when decrement ', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(7);
  });

  test('shoud return initialValue when exec reset ', () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));
    const { reset, decrement, increment } = result.current;

    act(() => {
      decrement(30);
      increment(300);
      reset();
    });

    expect(result.current.counter).toBe(20);
  });
});
