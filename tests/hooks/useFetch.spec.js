import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../../src/hooks';

describe('<useFetch>', () => {
  const url = 'https://www.breakingbadapi.com/api/quotes/1';

  test('should return initialState', () => {
    const { result } = renderHook(() => useFetch(url));
    const { data, isLoading, hasError } = result.current;

    expect(data).toBe(null);
    expect(isLoading).toBe(true);
    expect(hasError).toBe(null);
  });

  test('should return load images  && isLoading false', async () => {
    //dont work public API
    // const { result } = renderHook(() => useFetch(url));
    // await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0), {
    //   timeout: 1000,
    // });
    // const { data, isLoading } = result.current;
    // expect(data.length).toBeGreaterThan(0);
    // expect(isLoading).toBeFalsy();
  });
});
