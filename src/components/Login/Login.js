import React, { useReducer, useEffect, useContext, useRef } from 'react';
import AuthContext from '../store/auth-context';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

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

const Login = () => {

  const ctx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

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
      clearTimeout(fieldEntry)
    }
  },[enteredInput.email.isValid, enteredInput.password.isValid])
  
  useEffect(()=>{
    emailRef.current.focus();
  },[]);

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
    if(enteredInput.email.isValid && enteredInput.password.isValid)
      ctx.onLogin(enteredInput.email.value, enteredInput.password.value);
    else if(!enteredInput.email.isValid)
      emailRef.current.focus();
    else 
      passwordRef.current.focus();
  };

  return (
    <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input
            ref={emailRef} 
            isValid = {enteredInput.email.isValid}
            For="email" 
            type="email"
            title="Email"
            value={enteredInput.email.value}
            changeHandler = {emailChangeHandler}
            validateHandler = {validateEmailHandler}
          />
      
           <Input 
            ref={passwordRef} 
            isValid = {enteredInput.password.isValid}
            For="password" 
            type="password"
            title="Password"
            value={enteredInput.password.value}
            changeHandler = {passwordChangeHandler}
            validateHandler = {validatePasswordHandler}
          />

          <div className={classes.actions}>
            <Button type="submit" className={classes.btn} >
              Login
            </Button>
          </div>
        </form>
    </Card>
  );
};

export default Login;
