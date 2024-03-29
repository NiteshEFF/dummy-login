import React, {useRef, useImperativeHandle} from 'react';
import classes from './input.module.css';

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref,()=>{
        return {focus: activate}
    });
    
    return <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ''
    }`}
  >
    <label htmlFor={props.For}>{props.title}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.For}
            value={props.value}
            onChange={props.changeHandler}
            onBlur={props.validateHandler}
          />
    </div>
});

export default Input;