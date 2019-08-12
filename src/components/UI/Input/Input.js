import React from 'react'
import classes from './Input.css'

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    // we check if element was touched to assign invalid class. it touched when it register first change of data in input in the state
    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
            className={inputClasses.join(' ')} 
            {...props.elementConfig} 
            value={props.value} 
            onChange={props.changed}/>
            break;
        case ('textarea'): {
            inputElement = <textarea 
            className={inputClasses.join(' ')} 
            {...props.elementConfig} 
            value={props.value}
             onChange={props.changed}/>
            break;
        }
        case ('select'): {
            inputElement = (<select
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayName}</option>
                ))}
            </select>
            )
            break;
        }
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} />
    }
    return (<div className={classes.Input}>
        <label>
            {props.label}
        </label>
        {inputElement}
    </div>
    )
};

export default input; 