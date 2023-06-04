import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders the title and subtitle correctly', () => {
    const title = 'Welcome to your Tax Calculator';
    const subtitle = 'powered by Sleepy Heads';

    const { getByText } = render(<Header title={title} subtitle={subtitle} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
  });

  it('renders the default title and subtitle if no props are provided', () => {
    const defaultTitle = 'Welcome to your Tax Calculator';
    const defaultSubtitle = 'powered by Sleepy Heads';

    const { getByText } = render(<Header />);

    expect(getByText(defaultTitle)).toBeInTheDocument();
    expect(getByText(defaultSubtitle)).toBeInTheDocument();
  });
});
