import React from 'react';
import { FaMapMarkerAlt} from 'react-icons/fa';
import './styles/Users.css';

export const User = ({ children, data }) => (
  <div className="mv-card-user-item">{children}</div>
);
export const Users = ({ children }) => <section className="mv-card-user-list">{children}</section>

export const Avatar = ({ avatar_url }) => (
  <div className="mv-card-user-item-avatar" />
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
export default User;
