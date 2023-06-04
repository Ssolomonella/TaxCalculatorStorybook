import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const options = ['Income Tax', 'Property Tax'];
  const onOptionSelect = jest.fn();
  const dropdownId = 'tax-type-dropdown';
  const label = 'Tax Type';

  it('renders with provided options', () => {
    const { getByText } = render(
      <Dropdown id={dropdownId} label={label} options={options} selectedOption={options[0]} onOptionSelect={onOptionSelect} />
    );

    options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  it('calls onOptionSelect when an option is selected', () => {
    const { getByLabelText } = render(
      <Dropdown id={dropdownId} label={label} options={options} selectedOption={options[0]} onOptionSelect={onOptionSelect} />
    );

    fireEvent.change(getByLabelText(label), { target: { value: options[1] } });

    expect(onOptionSelect).toHaveBeenCalledWith(options[1]);
  });

  it('renders with the correct selected option', () => {
    const { getByLabelText } = render(
      <Dropdown id={dropdownId} label={label} options={options} selectedOption={options[0]} onOptionSelect={onOptionSelect} />
    );

    expect((getByLabelText(label) as HTMLSelectElement).value).toBe(options[0]);
  });
});
