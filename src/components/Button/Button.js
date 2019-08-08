import React from 'react';
import {
  operators,
  specialOperators
} from '../../utils/constants'
import './Button.css';
export default ({
  onButtonClick,
  buttonKey
}) => {
  let handleClick = (e) => {
    onButtonClick(e.target.textContent)
  }
  let classNames = [
    'button',
    operators.includes(buttonKey) ? 'orange-button' : '',
    specialOperators.includes(buttonKey) ? 'grey-button' : '',
    buttonKey === '0' ? 'zero' : ''
  ];


  return ( 
  <button 
    name = { buttonKey } 
    className = { classNames.join(' ').trim() } 
    onClick = { handleClick }
  >
    { buttonKey } 
  </button>
  );
}