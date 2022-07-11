import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import './chartscore.scss';
const ChartScore = ({ score }) => {
  const todayScore = [{ value: score * 2 }, { value: 1 - score * 2 }];

  return (
    <div className="scoreContainer">
      <div className="chart-score-tooltips">
        <h2>{score * 100}%</h2>
        <p>de votre objectif</p>
      </div>
      <ResponsiveContainer width={220} height={180}>
        <PieChart>
          <Pie
            data={todayScore}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {todayScore.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${index}`} fill="#ffffff" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomizeTooltips = ({ score }) => {
  // const { sessionLength } = payload?.payload;
  return (
    <>
      <div className="chart-score-tooltips">
        <h2>{score}%</h2>
        <p>de votre objectif</p>
      </div>
    </>
  );
};

export default ChartScore;