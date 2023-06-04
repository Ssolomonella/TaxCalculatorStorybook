import React from 'react';
import './Dropdown.css';

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (selectedOption: string) => void;
  id: string;
  label: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onOptionSelect, id, label }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select className="dropdown" id={id} value={selectedOption} onChange={(e) => onOptionSelect(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export {};
