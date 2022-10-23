import React from "react";
import classes from "./LineBox.module.css";
import icons from "../../../Assets/Icons/index/index";
import cx from "classnames";

const LineBox = ({ day, now, addTask }) => {
  const { Upload, ClipBoard, HalfStar, AddCheck } = icons;

  const specialDays = [1, 7, 77, 11, 15];
  const generateCardInfo = (specialDay) => {
    switch (specialDay) {
      case 1:
        return {
          iconComponent: Upload,
          subject: "Students",
          action: "Submit Papers",
        };
      case 7:
        return {
          iconComponent: ClipBoard,
          subject: "Instructors",
          actiob: "Review papers",
        };
      case 77:
        return {
          iconComponent: ClipBoard,
          subject: "Students",
          action: "Review papers",
        };
      case 11:
        return {
          IconComponent: AddCheck,
          subject: "Instuctors",
          action: "Prepare and view grade",
        };
      case 15:
        return {
          iconComponent: HalfStar,
          subject: "Students",
          action: "Rate feedback and view grade",
        };
      default:
        return null;
    }
  };

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
          {/* {specialDays.map((speacialDay) => {
            const { IconComponent, subject,action } = generateCardInfo(speacialDay);

            const markup = (
              <div>
                <div className={classes["icon-box"]}>
                  {<IconComponent />}
                </div>
                <div className={classes["text-box"]}>
                  {<p>{subject}</p>}
                  <span>{action}</span>
                </div>
              </div>
            );

            return <React.Fragment>{markup}</React.Fragment>;
          })} */}


          
          <div className={classes["icon-box"]}>
            <Upload />
          </div>
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
