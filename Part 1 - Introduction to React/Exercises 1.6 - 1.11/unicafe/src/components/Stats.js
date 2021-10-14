import React from "react";

import StatsLine from "./StatsLine";

const Stats = (props) => {
  const { data } = props;
  const all = Object.values(data).reduce((a, b) => a + b);
  const avg = (data.good - data.bad) / all;
  const positive = (data.good / all) * 100;

  if (all === 0) return <div>No feedback given</div>;

  return (
    <div>
      <table>
        <tbody>
          <StatsLine name="good" data={data.good}></StatsLine>
          <StatsLine name="neutral" data={data.neutral}></StatsLine>
          <StatsLine name="bad" data={data.bad}></StatsLine>
          <StatsLine name="all" data={all} />
          <StatsLine name="average" data={avg} />
          <StatsLine name="positive" data={positive} addon="%" />
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
