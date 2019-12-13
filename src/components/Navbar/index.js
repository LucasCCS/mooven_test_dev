import React from 'react';
import {connect} from 'react-redux';
import {FaSearch, FaBookmark, FaStar, FaMapMarkerAlt} from 'react-icons/fa';
import Button from '../Button';
import './styles/Navbar.css';
export function Navbar({token,info,dispatch}) {
  function handlerLogout() {
    return dispatch({type: 'AUTH_LOGOUT'});
  }
  return (
    <nav className="mv-navbar">
      {token !== null && (
        <div className="mv-navbar-user">
          <div
            className="mv-navbar-user-avatar"
            style={{ backgroundImage: `url('${info.avatar_url}')` }}
          ></div>
          <div className="mv-navbar-user-info">
            <div className="mv-navbar-user-info-username">{info.name}</div>
            <div className="mv-navbar-user-info-location">
              <FaMapMarkerAlt /> {info.location}
            </div>
          </div>
        </div>
      )}
      <ul className="mv-navbar-list">
        {token !== null ? (
          <>
            <li className="mv-navbar-list-item">
              <a href="/">
                <FaSearch />
                <span>Buscar usuário</span>
              </a>
            </li>
            <li className="mv-navbar-list-item">
              <a href="/user/favorite/repositories">
                <FaBookmark />
                <span>Repositórios favoritos</span>
              </a>
            </li>
            <li className="mv-navbar-list-item">
              <a href="/user/favorite/users">
                <FaStar />
                <span>Usuários favoritos</span>
              </a>
            </li>
            <li className="mv-navbar-list-item">
              <Button color="danger" onClick={() => handlerLogout()}>
                Sair
              </Button>
            </li>
          </>
        ) : (
          <>
            <li className="mv-navbar-list-item">
              <span>Já possui usuário?</span>
            </li>
            <li className="mv-navbar-list-item">
              <a href="https://github.com/login/oauth/authorize?client_id=51611dfc8c071d25f07b&scope=user:name">
                <Button color="primary">Entrar</Button>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
const mapStateToProps = state => ({
  token: state.user.token,
  info: state.user.info,
});
export default connect(mapStateToProps)(Navbar);