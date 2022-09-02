import React, { useEffect, useState } from "react";
import { getUserById } from "../services/apiRequest";
import ChartBar from "./charts/ChartBar";
import DataCard from "./DataCard";
import "./home.scss";
import FireImg from "../assets/fire.svg";
import Chicken from "../assets/chicken.svg";
import Apple from "../assets/apple.svg";
import Cheesburger from "../assets/cheeseburger.svg";
import ChartLine from "./charts/ChartLine";
import ChartRadar from "./charts/ChartRadar";
import ChartScore from "./charts/ChartScore";
import { useParams } from "react-router-dom";


const Home = () => {
  const [currentUser, setCurrentUser] = useState();
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    getUserById(userId).then((data) => {
      setCurrentUser(data);
    });
  }, [userId]);

  return (
    <div className="home-container">
      <h1>
        Bonjour <span> {currentUser && currentUser.userInfos.firstName}</span>
      </h1>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      <div className="stat-container">
        <div className="chart-container">
          {params.id && (
            <>
              <ChartBar userId={params.id} />
              <div className="stat-bottom">
                <ChartLine userId={params.id} />
                <ChartRadar userId={params.id} />
                {currentUser && <ChartScore score={currentUser.score} />}
              </div>
            </>
          )}
        </div>
        <div className="data-cards">
          <DataCard img={FireImg} value={"1,900KCal"}>
            Calories
          </DataCard>
          <DataCard img={Chicken} value={"155g"}>
            Proteines
          </DataCard>
          <DataCard img={Apple} value={"290g"}>
            Glucides
          </DataCard>
          <DataCard img={Cheesburger} value={"50g"}>
            Lipides
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
