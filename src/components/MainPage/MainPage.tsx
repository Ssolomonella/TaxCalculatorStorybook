import React from 'react';
import { Header } from '../Header/Header';
import { InputField } from '../InputField/InputField';
import { Dropdown } from '../Dropdown/Dropdown';
import { Button } from '../Button/Button';
import { SummaryArea } from '../SummaryArea/SummaryArea';
import './MainPage.css';

interface MainPageProps {
  // Define any props that you need
}

export const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <div className="main-page">
      <Header title="Welcome to your Tax Calculator" subtitle="powered by Sleepy Heads" />
      <InputField id="income-input" placeholder="Enter your income" />
      <Dropdown id="tax-type-dropdown" options={['Income Tax', 'Property Tax']} />
      <Button id="calculate-button" label="Calculate Tax" />
      <SummaryArea message="Your Tax Liability Is: Nothing to pay" />
    </div>
  );
};
