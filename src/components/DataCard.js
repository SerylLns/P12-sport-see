import React from 'react';
import './datacard.scss';
import PropTypes from "prop-types";

const DataCard = ({img, children, value }) => {
  return (
    <div className="datacard-container">
      <div
        className={`img-container ${children}`}
      >
        <img src={img} alt="" />
      </div>
      <div className="data-content">
        <h3>{value}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

DataCard.propTypes = {
  img: PropTypes.string,
  children: PropTypes.string,
  value: PropTypes.string
}

export default DataCard;
