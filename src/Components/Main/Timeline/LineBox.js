import classes from "./LineBox.module.css";

const LineBox = ({ day, now }) => {
  return (
    <div className={classes["dotted-line-box"]}>
      {now ? (
        <div className={classes["now-line-box"]}>
          <div className={classes["now-text"]}>Now</div>
          <div className={classes["now-line"]}>
          </div>
        </div>
      ) : null}
      <div className={classes["dotted-line"]}></div>
      <a href="#" className={classes["dotted-line-day"]}>
        {day}
      </a>
    </div>
  );
};

export default LineBox;
