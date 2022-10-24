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
              {/* <div className={classes["img-div-1"]}></div> */}
              <img
                src="http://electron6.phys.utk.edu/qm1/newimages/Animation1.gif"
                alt="Chart 1"
              />
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
              <img
                src="https://cdn.vaizle.com/ng-vwox-core/images/why-vaizle/analyst/actionable-insights.gif"
                alt="Chart 2"
              />
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
              {/* <div className={classes["img-div-3"]}></div> */}
              <img
                src="https://media.istockphoto.com/photos/donut-chart-picture-id1364998311?b=1&k=20&m=1364998311&s=170667a&w=0&h=NR5jb8Rgf7gWkOLuvGHrBF3Kg0IveZe00RawWZp4O3o="
                alt="Chart 3"
              />
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
