import React, { useState, useEffect } from "react";
import classes from "./LineBox.module.css";
import icons from "../../../Assets/Icons/index/index";
import cx from "classnames";

const LineBox = ({ day, now }) => {
  const [cardInfo, setCardInfo] = useState({
    IconComponent: null,
    subject: null,
    action: null,
    renderCard: false,
  });
  const { IconComponent, subject, action, renderCard } = cardInfo;
  const { Upload, ClipBoard, HalfStar, AddCheck } = icons;

  const generateCardInfo = (specialDay) => {
    switch (specialDay) {
      case 1:
        return {
          IconComponent: Upload,
          subject: "Students",
          action: "Submit Papers",
          renderCard: true,
        };
      case 7:
        return {
          IconComponent: AddCheck,
          subject: "Instructors",
          action: "Review papers",
          renderCard: true,
        };
      case 11:
        return {
          IconComponent: ClipBoard,
          subject: "Instuctors",
          action: "Prepare and view grade",
          renderCard: true,
        };
      case 15:
        return {
          IconComponent: HalfStar,
          subject: "Students",
          action: "Rate feedback and view grade",
          renderCard: true,
        };
      default:
        return { renderCard: false };
    }
  };

  useEffect(() => {
    const generatedInfo = generateCardInfo(day);
    setCardInfo((prevState) => (prevState = generatedInfo));
  }, []);

  return (
    <div className={classes[`dotted-line-box`]}>
      {now ? <NowLine /> : null}
      {renderCard ? (
        <TaskBox
          cx={cx}
          subject={subject}
          action={action}
          day={day}
          IconComponent={IconComponent}
        />
      ) : null}
      {day === 7 && renderCard ? (
        <div className={cx(classes[`task-box`], classes[`box-${day}-plus`])}>
          <div
            className={cx(classes["icon-box"], classes[`icon-box-${day}-plus`])}
          >
            {<IconComponent />}
          </div>
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

function NowLine() {
  return (
    <div className={classes["now-line-box"]}>
      <div className={classes["now-text"]}>Now</div>
      <div className={classes["now-line"]}></div>
    </div>
  );
}

function TaskBox({ cx, subject, action, day, IconComponent }) {
  return (
    <div className={cx(classes[`task-box`], classes[`box-${day}`])}>
      <div className={cx(classes["icon-box"], classes[`icon-box-${day}`])}>
        {<IconComponent />}
      </div>
      <div className={classes["text-box"]}>
        {<p>{subject}</p>}
        <span>{action}</span>
      </div>
    </div>
  );
}
