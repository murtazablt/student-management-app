import images from "../../../../Assets/Images";
import classes from "./ChartCards.module.css";

const ChartCards = () => {
  return (
    <div className={classes.charts}>
      <div className={classes.chartCard}>
        <div className={classes["chart-card-title"]}>
          <h2>&#x1F4AF; Grades</h2>
        </div>
        <div className={classes["img-wrapper"]}>
          <img
            src={images.chart1}
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
            src={images.chart2}
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
          <img
            src={images.chart3}
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
  );
};

export default ChartCards;
