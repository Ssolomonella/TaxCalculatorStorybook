import React from 'react';
import './Button.css';

interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Calculate Tax
    </button>
  );
};

export {};
