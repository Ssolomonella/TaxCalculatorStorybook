import React from 'react';
import './header.css';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = 'Welcome to your Tax Calculator', subtitle = 'powered by Sleepy Heads' }) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{subtitle}</p>
    </header>
  );
};
