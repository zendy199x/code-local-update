import React, {useState} from 'react';
import Button from './component/Button';
import Display from './component/Display';

function App() {
    const [counter, setCounter] = useState(0);

  const handleClick = (incrementValue) => {
    setCounter(counter + incrementValue)
  }
  return (
    <div>
    <Button onClickFunction={handleClick} increment={5}/>
    <Button onClickFunction={handleClick} increment={10}/>
    <Button onClickFunction={handleClick} increment={15}/>
    <Button onClickFunction={handleClick} increment={20}/>
    <Button onClickFunction={handleClick} increment={25}/>
    <Display message={counter}/>
    </div>
  )
}

export default App;
