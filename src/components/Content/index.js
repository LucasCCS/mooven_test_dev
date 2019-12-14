import React from "react";
import { FaAngleLeft } from 'react-icons/fa';
import "./styles/Content.css";
const Content = ({ children }) => {
  return <div className="mv-content">{children}</div>;
};
export const ContentHeader = ({children}) => {
  return <div className="mv-content-header">{children}</div>;
};
export const ContentBody = ({children}) => {
  return <div className="mv-content-body">{children}</div>;
};
export const ContentHeaderTitle = ({children}) => {
  return <strong className="mv-content-header-title">{children}</strong>; 
};
export const ContentHeaderBack = ({ children }) => {
  return (
    <a href="/">
      <FaAngleLeft />
    </a>
  );
};
export default Content;
