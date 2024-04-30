import {forwardRef,useEffect,useRef} from 'react'

/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useRef } from 'react';

// eslint-disable-next-line react/display-name, react-refresh/only-export-components
export default forwardRef(({ options=[], icon='user', placeholder='', 
name, id, value, className, required, isFocused, handleChange }, ref) => {
    const input = ref ? ref : useRef(null); 
    useEffect(() => { 
        if (isFocused) { 
            input.current.focus(); 
        }
    }, [isFocused]);
    return (
        <div className='input-group mb-3'>
            <span className='input-group-text'>
                <i className={'fa-solid '+icon}></i>
            </span>
            <input type={type} placeholder={placeholder} name={name}
            id={id} value={value} className={className} ref={input}
            required={required} onChange={(e) => handleChange(e)} />
        </div>
    )
});
