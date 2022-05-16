import React, { useEffect, useState } from "react";
import { getUserById } from "../services/apiRequest";
import ChartBar from "./charts/ChartBar";
import "./home.scss";

const Home = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    getUserById(12).then((user) => setCurrentUser(user));
  }, []);

  return (
    <div className="home-container">
      <h1>
        Bonjour <span> {currentUser && currentUser.userInfos.firstName}</span>
      </h1>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      <ChartBar/>
    </div>
  );
};

export default Home;
