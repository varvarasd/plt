import React from 'react';
import classNames from 'classnames';

export const Button = ({classes, action, children}) => {
    const buttonClasses = classNames('button', {
        'button__remove': classes
    })
    return <button 
        onClick={action} 
        className={buttonClasses}>
            {children}
        </button>;
}
