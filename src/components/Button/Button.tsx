import React from 'react';
import './Button.css';

interface ButtonProps {
  id: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ id, onClick }) => {
  return (
    <button id={id} className="button" onClick={onClick}>
      Calculate Tax
    </button>
  );
};

export {};
