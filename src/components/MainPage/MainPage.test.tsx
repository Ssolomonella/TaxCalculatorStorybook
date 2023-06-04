// MainPage.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { MainPage } from './MainPage';

describe('MainPage', () => {
  it('renders the main page with its components', () => {
    const { getByText } = render(<MainPage />);

    expect(getByText('Welcome to your Tax Calculator')).toBeInTheDocument();
    expect(getByText('powered by Sleepy Heads')).toBeInTheDocument();
    expect(getByText('Calculate Tax')).toBeInTheDocument();
    expect(getByText('Your Tax Liability Is: Nothing to pay')).toBeInTheDocument();
    expect(getByText('Income Tax')).toBeInTheDocument();
    expect(getByText('Property Tax')).toBeInTheDocument();
  });
});
