import React, { useState } from 'react';

import Card from './UI/Card';
import classes from './Login/Login.module.css';
import Button from './UI/Button/Button';

const SignUp = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [confirm , setConfirm] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6 && confirm===enteredPassword
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@') && confirm===enteredPassword
    );
  };
  const confirnChangeHandler = (event) =>{
    setConfirm(event.target.value);

    setFormIsValid(
        event.target.value.trim().length > 6 && enteredEmail.includes('@') && enteredPassword===event.target.value
      );
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirm"
            value={confirm}
            onChange={confirnChangeHandler}
          />
        </div>
        <div className={classes.actions}>
        <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Sign-Up
          </Button>
        <Button className={classes.btn} onClick={props.setShowToggle}>
           Login
        </Button> 
        </div>
      </form>
  );
};

export default SignUp;
