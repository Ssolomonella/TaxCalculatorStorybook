// Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('calls the onClick prop when clicked', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Button onClick={handleClick} />);
    
    fireEvent.click(getByText('Calculate Tax'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the button with the correct text', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Button onClick={handleClick} />);
    
    expect(getByText('Calculate Tax')).toBeInTheDocument();
  });
});
