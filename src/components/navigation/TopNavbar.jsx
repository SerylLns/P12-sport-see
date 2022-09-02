import React from 'react';
import "./navigation.scss";
import  Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <div className="top-navbar-container">
      <img src={Logo} alt="" />
      <ul className="nav-container">
        <Link to={"/"}>
          <li>Accueil</li>
        </Link>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default TopNavbar;