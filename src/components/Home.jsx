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
      console.log(data);
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
          {currentUser && (
            <>
              <DataCard
                img={FireImg}
                value={`${currentUser.keyData.calorieCount}KCal`}
              >
                Calories
              </DataCard>
              <DataCard
                img={Chicken}
                value={`${currentUser.keyData.carbohydrateCount}g`}
              >
                Proteines
              </DataCard>
              <DataCard
                img={Apple}
                value={`${currentUser.keyData.lipidCount}g`}
              >
                Glucides
              </DataCard>
              <DataCard
                img={Cheesburger}
                value={`${currentUser.keyData.proteinCount}g`}
              >
                Lipides
              </DataCard>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
