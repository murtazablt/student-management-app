import classes from "./LineBox.module.css";
import icons from "../../../Assets/Icons/index";
import cx from 'classnames'

const LineBox = ({ day, now, addTask }) => {
  return (
    <div className={classes[`dotted-line-box`]}>
      {now ? (
        <div className={classes["now-line-box"]}>
          <div className={classes["now-text"]}>Now</div>
          <div className={classes["now-line"]}></div>
        </div>
      ) : null}
      {addTask ? (
        <div className={cx(classes[`task-box`], classes[`box-${day}`])}>
          <div className={classes["icon-box"]}>{icons.upload}</div>
          {day === 1 && (
            <div className={classes["text-box"]}>
              <p>Students</p>
              <span>Submit papers</span>
            </div>
          )}
          {day === 7 && (
            <div className={classes["text-box"]}>
              <p>Instructors</p>
              <span>Review papers</span>
            </div>
          )}
          {day === 11 && (
            <div className={classes["text-box"]}>
              <p>Instructors</p>
              <span>Prepare and release grades</span>
            </div>
          )}
          {day === 15 && (
            <div className={classes["text-box"]}>
              <p>Students</p>
              <span>Rate feedback and view grade</span>
            </div>
          )}
        </div>
      ) : null}
      {day === 7 ? (
        <div className={cx(classes[`task-box`], classes[`box-${day}-plus`])}>
          <div className={classes["icon-box"]}>{icons.upload}</div>
          <div className={classes["text-box"]}>
            <p>Instructors</p>
            <span>Review Papers</span>
          </div>
        </div>
      ) : null}
      <div className={classes["dotted-line"]}></div>
      <a href="#" className={classes["dotted-line-day"]}>
        {`8/${day}`}
      </a>
    </div>
  );
};

export default LineBox;
