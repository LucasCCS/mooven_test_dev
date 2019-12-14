import React from 'react';
import { FaBookmark, FaStar, FaTrash, FaLock } from "react-icons/fa";
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

export const FavoriteRepository = ({ children, status, dispatch, repo }) => (
  <button
    className={`mv-repositories-repository-favorite mv-repositories-repository-favorite-${status}`}
    onClick={e => dispatch({
      type: "UPDATE_FAVORITE_REPOS",
      repo
    })}
  >
    <FaStar />
  </button>
);

export const RemoveRepository = ({ children, dispatch, repo }) => (
  <button
    className={`mv-repositories-repository-remove`}
    onClick={e =>
      dispatch({
        type: "UPDATE_FAVORITE_REPOS",
        repo
      })
    }
  >
    <FaTrash />
  </button>
);

export const RepositoryAuthRequiredAlert = ({ children }) => (
  <small className="mv-repositories-repository-auth-alert">
    <FaLock /> {children}
  </small>
);