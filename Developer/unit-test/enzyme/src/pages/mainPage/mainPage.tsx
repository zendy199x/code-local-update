import * as React from 'react';
import { InputForm, InputFormProps } from './components';

const inputFormProps: InputFormProps = {
  onButtonAClick: console.log,
  onButtonBClick: console.log,
  onButtonCClick: console.log,
}

export const MainPage = () => {
  return (
    <div>
      <InputForm {...inputFormProps} />
    </div>
  );
}