import React from 'react';
import './Dropdown.css';

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (selectedOption: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onOptionSelect }) => {
  return (
    <select className="dropdown" value={selectedOption} onChange={(e) => onOptionSelect(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export {};
