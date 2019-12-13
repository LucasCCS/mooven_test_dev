import React from 'react';
import './styles/Tags.css';
export const Tags = ({children}) => {
  return <section className="mv-tags">{children}</section>
};

export const Tag = ({ children, className}) => {
  return <div className={`mv-tags-tag ${className}`}>{children}</div>
};

export default Tag;