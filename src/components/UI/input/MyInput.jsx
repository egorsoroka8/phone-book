import React from "react";
import classes from './MyInput.module.css';


const MyInput = ({ handleNumberChange, handleKeyDown, number, ...props }) => {

  return (
    <input
      className={classes.myInput}
      type="text"
      minLength={3}
      maxLength={10}
      value={number}
      onChange={handleNumberChange}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
};

export default MyInput;

