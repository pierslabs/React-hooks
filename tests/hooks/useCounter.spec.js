import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('UseCounter', () => {
  test('debe retornar los valores por defecto ', () => {
    renderHook(() => useCounter());
  });
});
