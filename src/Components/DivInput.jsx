import {forwardRef,useEffect,useRef} from 'react'

/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

// eslint-disable-next-line react/display-name, react-refresh/only-export-components
export default forwardRef(({ type='text', icon='user', placeholder='', 
name, id, value, className, required, isFocused, handleChange}, ref) => {
    const input = ref ? ref : useRef(null); 
    useEffect(() => { 
        if (isFocused) { 
            input.current.focus(); 
        }
    }, [isFocused]);
    return (
        <div>
            <div className="flex rounded-lg shadow-sm">
                <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">Small</span>
                <input type={type} className={placeholder} 
                    name={name} id={id} value={value} ref={input}
                    required={required} onChange={(e) => handleChange(e)}/>
            </div>
        </div>
    )
});
