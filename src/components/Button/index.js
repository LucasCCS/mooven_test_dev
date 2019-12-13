import React from 'react';
import Loader from 'react-loader-spinner'
import './styles/Button.css';
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css"
export const Button = ({ children, color, size, onClick, loading}) => {
  return (
    <button
      className={`mv-btn mv-btn-${color} mv-btn-${size}`}
      onClick={e => onClick(e)}
    >
      {loading ? (
        <Loader type="TailSpin" color="#FFF" height={30} width={30} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;