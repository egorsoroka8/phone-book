import React from "react";
import classes from './MyButton.module.css'

const MyButton = ({ children, isNumberValid, ...props }) => {
  return (
    <button
      className={classes.myButton}
      disabled={!isNumberValid}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;