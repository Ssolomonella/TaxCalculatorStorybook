import React from 'react';
import './SummaryArea.css';

interface SummaryAreaProps {
  message: string;
}

export const SummaryArea: React.FC<SummaryAreaProps> = ({ message = 'Your tax liability is: Nothing to pay' }) => {
  return (
    <div className="summary-area">
      <p className="summary-message">{message}</p>
    </div>
  );
};

export {};