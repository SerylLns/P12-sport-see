import React from "react";
import { Link } from "react-router-dom";
import "./select-user.scss";

const SelectUser = () => {
  return (
    <div className="user-container">
      <h1>Choisir un utilisateur</h1>
      <Link to={"/12"}>Utilisateur 12 (Karl)</Link>
      <Link to={"/18"}>Utilisateur 18 (Cecilia)</Link>
    </div>
  );
};

export default SelectUser;
