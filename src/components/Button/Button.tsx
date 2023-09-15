import React, {ReactNode} from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

function Button<T extends ButtonProps>(props: T){
    const {onClick, children, className, disabled} = props;

    return(
        <button className={`button ${className || ''}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;