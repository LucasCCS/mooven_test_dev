import React from "react";
import "./styles/Content.css";
const Content = ({ children }) => {
  return <div className="mv-content">{children}</div>;
};
export const ContentHeader = ({children}) => {
  return <div className="mv-content-header">{children}</div>;
}
export const ContentBody = ({children}) => {
  return <div className="mv-content-body">{children}</div>;
}
export default Content;
