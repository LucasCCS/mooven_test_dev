import React from 'react';
import {connect} from 'react-redux';
import {FaSearch, FaBookmark, FaStar, FaMapMarkerAlt} from 'react-icons/fa';
import Button from '../Button';
import './styles/Navbar.css';
export const Navbar = ({token,info}) => {
  return <nav className="mv-navbar">
    {
      (token !== null && (
          <div className="mv-navbar-user">
            <div className="mv-navbar-user-avatar"></div>
            <div className="mv-navbar-user-info">
              <div className="mv-navbar-user-info-username">Lucas Costa</div>
              <div className="mv-navbar-user-info-location"><FaMapMarkerAlt /> Guarulhos - SP</div>
            </div>
          </div>
        )
      )
    }
    <ul className="mv-navbar-list">
      {
        token !== null ? (
          <>
            <li className="mv-navbar-list-item">
              <a href="/usuarios">
                <FaSearch />
                <span>Buscar usuário</span>
              </a>
            </li>
            <li className="mv-navbar-list-item">
              <a href="favoritos/repositorios">
                <FaBookmark />
                <span>Repositórios favoritos</span>
              </a>
            </li>
            <li className="mv-navbar-list-item">
              <a href="favoritos/usuarios">
                <FaStar />
                <span>Usuários favoritos</span>
              </a>
            </li>
            <li className="mv-navbar-list-item">
              <Button color="primary">Entrar</Button>
            </li>
          </>
        ) :
        (
          <>
            <li className="mv-navbar-list-item">
              <span>Já possui usuário?</span>
            </li>
            <li className="mv-navbar-list-item">
              <a href="/entrar">
                <Button color="primary">Entrar</Button>
              </a>
            </li>
          </>
        )
      }
    </ul>
  </nav>
};
const mapStateToProps = state => ({
  token: state.user.token,
  info: state.user.info,
});
export default connect(mapStateToProps)(Navbar);