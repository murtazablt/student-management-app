import React from "react";

import classes from "./ResultsCard.module.css";

const ResultsCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h1> &#x1F389; Results</h1>
          <p>
            <a href="#">Review and adjust grades for everyone</a>
          </p>
        </div>
        <div className={classes.charts}>
          <div className={classes.chartCard}>
            <div className={classes["chart-card-title"]}>
              <h2>&#x1F4AF; Grades</h2>
            </div>
            <div className={classes["img-wrapper"]}>
              <img src="" alt="Chart 1" />
            </div>
            <div className={classes["info-box"]}>
              <p>Average: 77%</p>
              <p>Median: 77%</p>
              <p>Standard Deviation: 15</p>
            </div>
          </div>
          <div className={classes.chartCard}>
            <div className={classes["chart-card-title"]}>
              <h2>Grader Ability</h2>
            </div>
            <div className={classes["img-wrapper"]}>
                <img src="" alt="" />
            </div>
            <div className={classes["info-box"]}>
              <p>Reliable graders: 77%</p>
              <p>Unreliable graders: 12%</p>
            </div>
          </div>
          <div className={classes.chartCard}>
            <div className={classes["chart-card-title"]}>
              <h2>&#x267B; Feedback quality</h2>
            </div>
            <div className={classes["img-wrapper"]}>
              <img src="" alt="Chart 1" />
            </div>
            <div className={classes["info-box"]}>
              <p>Useful: 72%</p>
              <p>Neutral: 15%</p>
              <p>Not useful: 13%</p>
            </div>
          </div>
        </div>
        <div className={classes.options}>
          <div className={classes.option}>
            <a href="#"> &#x1F4CB; Edit the distribution</a>
          </div>
          <div className={classes.option}>
            <a href="#"> &#x1F453; Spot-check papers</a>
          </div>
          <div className={classes.option}>
            <a href="#"> &#x1F440; Choose what students see</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
