/* eslint-disable no-undef */
import React, { MouseEventHandler } from 'react';
import './_Button.scss';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<ButtonProps> = ({ type, className, onClick, children }) => {
  return (
    <button
      className={`button ${className == null ? '' : className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
