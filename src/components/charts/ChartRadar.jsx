import React, { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { getUserPerformances } from "../../services/apiRequest";
import "./chartradar.scss";
import PropTypes from "prop-types";

/**
 * @param {string} userId 
 */
const ChartRadar = ({ userId }) => {
  const [data, setData] = useState();
  useEffect(() => {
    getUserPerformances(userId).then((res) => setData(res));
  }, [userId]);

  return (
    <RadarChart
      style={{
        // padding: "5px 10px",
        backgroundColor: "#282D30",
        borderRadius: "6px",
        fontSize: "12px",
        color: "white",
      }}
      width={220}
      height={180}
      data={data}
      // outerRadius={90}
    >
      <PolarAngleAxis
        className="polarAngle"
        dataKey="kindName"
        fill="white"
      />
      <PolarGrid />
      <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" opacity={0.7} />
    </RadarChart>
  );
};

ChartRadar.propTypes = {
  userId: PropTypes.string
}

export default ChartRadar;
