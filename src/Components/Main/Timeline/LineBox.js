import classes from "./LineBox.module.css";

const LineBox = ({ day }) => {
  return (
    <div className={classes["dotted-line-box"]}>
      <div class={classes["dotted-line"]}></div>
      <a href="#" className={classes["dotted-line-day"]}>
        {day}
      </a>
    </div>
  );
};

export default LineBox;
