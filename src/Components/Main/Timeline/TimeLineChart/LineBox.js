import React, { useState, useEffect } from "react";

import classes from "./LineBox.module.css";
import taskBoxStyles from "./TaskBox.module.css";
import cx from "classnames";

import NowLine from "./NowLine";
import TaskBox from "./TaskBox";

import { generateCardInfo } from "../../../../Services/Actions/generateCardInfo";

const LineBox = ({ day, now }) => {
  const [cardInfo, setCardInfo] = useState({
    IconComponent: null,
    subject: null,
    action: null,
    renderCard: false,
  });
  const { IconComponent, subject, action, renderCard } = cardInfo;

  useEffect(() => {
    const generatedInfo = generateCardInfo(day);
    setCardInfo((prevState) => (prevState = generatedInfo));
  }, []);

  return (
    <div className={classes[`dotted-line-box`]}>
      {now ? <NowLine /> : null}
      {renderCard ? (
        <TaskBox
          subject={subject}
          action={action}
          day={day}
          IconComponent={IconComponent}
          sevenPlus={false}
        />
      ) : null}

      {day === 7 && renderCard ? (
        <TaskBox
          subject={subject}
          action={action}
          day={day}
          IconComponent={IconComponent}
          sevenPlus={true}
        />
      ) : null}

      <div className={classes["dotted-line"]}></div>
      <a href="#" className={classes["dotted-line-day"]}>
        {`8/${day}`}
      </a>
    </div>
  );
};

export default LineBox;
