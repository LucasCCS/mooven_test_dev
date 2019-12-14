import React from 'react';
import Loader from "react-loader-spinner";
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './styles/Loading.css';
export default function Loading({size, color, type}) {
  return (
    <div className="mv-loading">
      <Loader type={type} color={color} height={size} width={size} />
    </div>
  );
}