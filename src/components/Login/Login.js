import React, { useReducer, useEffect, useContext } from 'react';
import AuthContext from '../store/auth-context';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const inputReducer = (prevState, action) => {
  switch (action.type){
    case 'EMAIL_INPUT' : return {...prevState,email:{value: action.payload.val, isValid: action.payload.val.includes('@')}};
    case 'VALID_EMAIL' : return {...prevState,email:{value: prevState.email.value, isValid: prevState.email.value.includes('@')}};
    case 'PWD_INPUT' : return {...prevState, password: {value: action.payload.val, isValid: action.payload.val.length > 6}};
    case 'VALID_PWD' : return {...prevState, password:{value: prevState.password.value, isValid: prevState.password.value.length > 6}};
    case 'VALID_INPUT' : return {...prevState, formIsValid: prevState.email.value.includes('@') && prevState.password.value.length > 6}
    default: return {value:"", isValid:false};
  }
};

const Login = (props) => {

  const ctx = useContext(AuthContext);

  const formInit = {
    email: {value:"",isValid: null},
    password: {value:"",isValid: null},
    formIsValid: false
  };

  const [enteredInput, dispatchInput] = useReducer(inputReducer, formInit);

  useEffect(()=>{
    const fieldEntry = setTimeout(()=>{
      dispatchInput({type:'VALID_INPUT'});
    },500);

    return ()=>{
      clearTimeout(fieldEntry)}
  },[enteredInput.email.isValid, enteredInput.password.isValid])  

  const emailChangeHandler = (event) => {
    dispatchInput({'type':'EMAIL_INPUT',payload:{val:event.target.value}});
  };

  const passwordChangeHandler = (event) => {
    dispatchInput({'type':'PWD_INPUT',payload:{val:event.target.value}});
  };

  const validateEmailHandler = () => {
    dispatchInput({type:'VALID_EMAIL'});
  };

  const validatePasswordHandler = () => {
    dispatchInput({type:'VALID_PWD'});
    
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(enteredInput.email.value, enteredInput.password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            enteredInput.email.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredInput.email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            enteredInput.password.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredInput.password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!enteredInput.formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
