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
      <div className="input-dropdown">
        <InputField placeholder="Enter your annual income" />
        <Dropdown options={['Income Tax', 'Property Tax']} />
      </div>
      <Button label="Calculate Tax" />
      <SummaryArea message="Your Tax Liability Is:" />
    </div>
  );
};
