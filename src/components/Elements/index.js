import React from 'react';

export const Button = ({classes, action, children}) => {
    const buttonClasses = classes ? `button ${classes}` : 'button';
    return <button 
        onClick={action} 
        className={buttonClasses}>
            {children}
        </button>;
}
