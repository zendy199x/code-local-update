import React from 'react';

function Button(props) {
  const handleClickButton = () => props.onClickFunction(props.increment)
  return (
    <button onClick={handleClickButton}>+{props.increment}</button>
  )
}

export default Button;
