import React from 'react';
import "./navigation.scss";
import  Logo from '../../assets/logo.svg';

const TopNavbar = () => {
  return (
    <div className="top-navbar-container">
      <img src={Logo} alt="" />
      <ul className='nav-container'>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default TopNavbar;