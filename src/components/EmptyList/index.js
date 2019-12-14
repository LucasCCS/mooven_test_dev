import React from 'react';
import './styles/EmptyList.css';
export const EmptyList = ({children,}) => {
  return (
    <section className="mv-empty-list">
      <strong>{children}</strong>
    </section>
  )
};

export default EmptyList;