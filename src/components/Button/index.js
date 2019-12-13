import React from 'react';
import './styles/Button.css';
export const Button = ({children, color, size}) => {
  return <button className={`mv-btn mv-btn-${color} mv-btn-${size}`}>{children}</button>
};

export default Button;