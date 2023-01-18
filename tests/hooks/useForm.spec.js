import { getDefaultNormalizer, renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../../src/hooks/useForm';

const initialForm = {
  name: 'Pier',
  email: 'pier@getDefaultNormalizer.com',
};

describe('<useForm>', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));

    // const { formState, name, email } = result.current;

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('should change name in form', () => {
    const newValue = 'Eddy';
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;
    //name hace referencia al atributo de la etiqueta event.target.name
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('should return default values  onReset', () => {
    const newValue = 'Eddy';
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;
    //name hace referencia al atributo de la etiqueta event.target.name
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm(initialForm);
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
