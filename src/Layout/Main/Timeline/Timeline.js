import React from "react";

import TitleBox from "../../../Components/Main/Timeline/TitleBox/TitleBox";
import TimelineChart from "../../../Components/Main/Timeline/TimeLineChart/TimelineChart";

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
