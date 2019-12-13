import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import './styles/Repositories.css';
export const Repositories = ({children}) => {
  return <section className="mv-repositories">{children}</section>
};

export const Repository = ({ children }) => {
  return <div className="mv-repositories-repository">{children}</div>
};

export const Title = ({ children }) => {
  return <strong className="mv-repositories-repository-title"><FaBookmark /> <span>{children}</span></strong>
};

export const Description = ({ children }) => {
  return <p className="mv-repositories-repository-description">{children}</p>
};