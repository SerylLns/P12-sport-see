import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./chartbar.scss";
import { getUserActivity } from "../../services/apiRequest";
import PropTypes from "prop-types";

/**
 * @param {string} userId
 */

const ChartBar = ({ userId }) => {
  const [data, setData] = useState([]);

  const radius = [8, 8, 0, 0];

  useEffect(() => {
    getUserActivity(parseInt(userId)).then((res) => setData(res));
  }, [userId]);

  return (
    <>
      <BarChart
        width={850}
        height={200}
        barGap={-60}
        style={{
          marginLeft: "-60px",
          backgroundColor: "#FBFBFB",
          borderRadius: "5px",
        }}
        data={data}
      >
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <YAxis
          dataKey="kilogram"
          domain={["dataMin - 2", "dataMax + 2"]}
          orientation="right"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey="calories"
          axisLine={false}
          tickLine={false}
          interval={0}
          domain={["dataMin - 150", "dataMax + 100"]}
          display={"none"}
          yAxisId="calories"
        />
        <Legend
          verticalAlign="top"
          align="right"
          content={<CustomizedLegend />}
        />
        <XAxis dataKey="day" tickLine={false} />
        <Tooltip
          style={{ backgroundColor: "#ffff" }}
          label="calories"
          content={<CustomizeTooltips />}
        />
        <Bar dataKey="kilogram" radius={radius} maxBarSize={5} fill="#000" />
        <Bar
          dataKey="calories"
          radius={radius}
          yAxisId="calories"
          maxBarSize={5}
          fill="#FF0101"
        />
      </BarChart>
    </>
  );
};

const CustomizedLegend = (props) => {
  const { payload } = props;
  return (
    <div className="customLegend">
      <p>Activité quotidienne</p>
      <ul>
        {payload.map((entry, index) => (
          <li className={`legendItem ${entry.value}`} key={index}>
            <span></span>
            <p>
              {`${
                entry.value === "kilogram"
                ? "Poids (kg)"
                : "Calories brulées (kCal)"
              }`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CustomizeTooltips = (props) => {
  return (
    <>
      {props.payload?.[0] && (
        <div className="chart-bar-tooltips">
          <>
            <span>
              {props.payload[0].value}kg
            </span>
            <span>{props.payload[1].value}Kcal</span>
          </>
        </div>
      )}
    </>
  );
};

ChartBar.propTypes = {
  userId: PropTypes.string,
};

export default ChartBar;
