import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputField', () => {
  it('calls onChange prop when input changes', () => {
    const handleChange = jest.fn();
    const testValue = '5000';
    
    const { getByPlaceholderText } = render(
      <InputField value="" onChange={handleChange} />
    );

    fireEvent.change(getByPlaceholderText('Enter your income'), { target: { value: testValue } });

    expect(handleChange).toHaveBeenCalledWith(testValue);
  });

  it('displays the correct value', () => {
    const handleChange = jest.fn();
    const testValue = '5000';
    
    const { getByDisplayValue } = render(
      <InputField value={testValue} onChange={handleChange} />
    );
    
    expect(getByDisplayValue(testValue)).toBeInTheDocument();
  });
});
