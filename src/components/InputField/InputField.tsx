import React, { useState } from 'react';
import './InputField.css';

interface InputFieldProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ id, value, onChange }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (isNaN(Number(inputValue))) {
      setErrorMessage('Please enter a numerical value');
    } else {
      setErrorMessage('');
    }

    onChange(inputValue);
  };

  return (
    <div>
      <input
        id={id}
        type="number"
        className="input-field"
        placeholder="Enter your income"
        value={value}
        onChange={handleInputChange}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};
export {};
