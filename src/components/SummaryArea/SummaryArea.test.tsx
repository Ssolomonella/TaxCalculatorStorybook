// SummaryArea.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { SummaryArea } from './SummaryArea';

describe('SummaryArea', () => {
  it('renders the message correctly', () => {
    const testMessage = 'Your Tax Liability Is: Nothing to pay';
    
    const { getByText } = render(
      <SummaryArea message={testMessage} />
    );

    expect(getByText(testMessage)).toBeInTheDocument();
  });

  it('renders the default message if no props are provided', () => {
    const defaultMessage = 'Your tax liability is: Nothing to pay';
    
    const { getByText } = render(
      <SummaryArea />
    );

    expect(getByText(defaultMessage)).toBeInTheDocument();
  });
});
