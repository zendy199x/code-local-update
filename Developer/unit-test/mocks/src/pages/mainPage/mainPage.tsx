import * as React from 'react';
import { InputForm, InputFormProps } from './components';

const inputFormProps: InputFormProps = {
  onButtonAClick: console.log,
  onButtonBClick: console.log,
  onButtonCClick: console.log,
  generateNumberFromSeed: (num: number): number => num && !Number.isNaN(num) ? num + 3 : 3,
}

export const MainPage = () => {
  return (
    <div>
      <InputForm {...inputFormProps} />
    </div>
  );
}