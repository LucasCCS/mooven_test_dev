import React from 'react';
import './styles/Input.css';
export const Input = ({type, placeholder, onChange}) => {
  return (
    <input 
      className="mv-input"
      type={type} 
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;