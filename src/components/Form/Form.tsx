import React from 'react';

interface FormProps{
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string;
    type?: string;
    className?: string;
}

function Form<T extends FormProps>(props: T){
    const {onChange, placeholder, value, type, className} = props;

    return(
        <input placeholder={placeholder} className={`button ${className || ''}`} onChange={onChange} value={value} type={type}/>
    )

}

export default Form;