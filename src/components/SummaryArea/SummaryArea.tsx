import React from 'react';
import './SummaryArea.css';

export interface SummaryAreaProps {
  message?: string;
}

export const SummaryArea: React.FC<SummaryAreaProps> = ({ message = 'Your Tax Liability Is:' }) => {
  return <div className="summary-area">{message}</div>;
};

export {};