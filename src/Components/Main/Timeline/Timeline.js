import React from "react";

import TitleBox from "./TitleBox/TitleBox";
import TimelineChart from "./TimeLineChart/TimelineChart";

import classes from "./Timeline.module.css";

const Timeline = () => {
  return (
    <div className={classes.container}>
      <TitleBox />
      <TimelineChart />
    </div>
  );
};

export default Timeline;
