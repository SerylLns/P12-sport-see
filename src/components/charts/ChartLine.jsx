import React, { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import PropTypes from "prop-types";
import { getUserAverageSessions } from "../../services/apiRequest";
import "./chartline.scss";

/**
 * @param {string} userId
 */
const ChartLine = ({ userId }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getUserAverageSessions(userId).then((res) => {
      setData(res);
    });
  }, [userId]);

  return (
    <div className="lineContainer">
      <h2 className="lineTitle">Durée moyenne des sessions</h2>
      <ResponsiveContainer width={220} height={180}>
        <LineChart
          style={{
            padding: "0px 0px",
            backgroundColor: "#FF0000",
            borderRadius: "6px",
          }}
          data={data}
        >
          <YAxis
            dataKey="sessionLength"
            axisLine={false}
            tickLine={false}
            domain={["dataMin - 10", "dataMax + 50"]}
            display={"none"}
            hide="true"
          />
          <XAxis
            type="category"
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, stroke: "rgba(255, 255, 255, 0.7)" }}
            domain={["dataMin", "dataMax"]}
          />
          <Line
            dataKey="sessionLength"
            strokeWidth={2}
            type="natural"
            color="#ffff"
            dot={false}
            activeDot={{ stroke: "white", strokeWidth: 2, r: 2 }}
            // legendType="rect"
            stroke="#ffff"
          />
          <Tooltip
            style={{ backgroundColor: "#ffff" }}
            label="sessionLength"
            content={<CustomizeTooltips />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

ChartLine.propTypes = {
  userId: PropTypes.string,
};

/**
 * @param {object} props
 */
const CustomizeTooltips = (props) => {
  // const { sessionLength } = payload?.payload;
  return (
    <>
      <div className="chart-line-tooltips">
        {props.payload[0] && <span>{props.payload[0].value} min</span>}
      </div>
    </>
  );
};

CustomizeTooltips.propTypes = {
  props: PropTypes.object,
};

export default ChartLine;
