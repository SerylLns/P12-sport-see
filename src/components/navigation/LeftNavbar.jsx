import React from 'react';
import './navigation.scss'
import { ReactComponent as YogaIcon } from '../../assets/yoga.svg';
import { ReactComponent as CycleIcon } from '../../assets/cycle.svg';
import { ReactComponent as SwimIcon } from '../../assets/swimming.svg';
import { ReactComponent as StrengthIcon } from "../../assets/muscle.svg";

const LeftNavbar = () => {
  return (
    <div className="left-navbar-container">
      <div className="activity-categories">
        <div className="activity-category">
          <YogaIcon />{" "}
        </div>
        <div className="activity-category">
          <CycleIcon />
        </div>
        <div className="activity-category">
          <SwimIcon />
        </div>
        <div className="activity-category">
          <StrengthIcon />
        </div>
      </div>
      <span>Copyright, SportSee 2020</span>
    </div>
  );
};

export default LeftNavbar;