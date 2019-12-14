import React from 'react';
import { FaMapMarkerAlt, FaStar, FaTrash } from "react-icons/fa";
import './styles/Users.css';

export const User = ({ children }) => (
  <div className="mv-card-user-item">{children}</div>
);
export const Users = ({ children }) => <section className="mv-card-user-list">{children}</section>

export const Avatar = ({ url }) => (
  <div
    className="mv-card-user-item-avatar"
    style={{ backgroundImage: `url('${url}')` }}
  />
);
export const Username = ({ children }) => (
  <strong className="mv-card-user-item-username">{children}</strong>
);
export const Location = ({ children }) => (
  <strong className="mv-card-user-item-location"><FaMapMarkerAlt/> {children}</strong>
);
export const Bio = ({ children }) => (
  <p className="mv-card-user-item-bio">{children}</p>
);
export const Body = ({children}) => (
  <div className="mv-card-user-item-body">{children}</div>
);
export const Footer = ({ children }) => (
  <div className="mv-card-user-item-footer">{children}</div>
);
export const Action = ({ children, href }) => (
  <a href={href} className="mv-card-user-item-footer-btn">{children}</a>
);
export const FavoriteUser = ({ children, status, user, dispatch, onClick }) => (
  <button
    className={`mv-card-user-item-favorite mv-card-user-item-favorite-${status}`}
    onClick={e => {
        dispatch({
          type: "UPDATE_FAVORITE_USERS",
          user
        });

        if (onClick) onClick(e);
      }
    }
  >
    <FaStar />
  </button>
);

export const RemoveUser = ({ children, user, dispatch }) => (
  <button
    className={`mv-card-user-item-remove`}
    onClick={e =>
      dispatch({
        type: "UPDATE_FAVORITE_USERS",
        user
      })
    }
  >
    <FaTrash />
  </button>
);
export default User;
