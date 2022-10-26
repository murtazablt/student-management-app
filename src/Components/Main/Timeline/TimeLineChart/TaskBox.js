import classes from "./TaskBox.module.css";
import cx from "classnames";

const TaskBox = ({ subject, action, day, IconComponent, sevenPlus }) => {
  const taskBox = sevenPlus
    ? cx(classes[`task-box`], classes[`box-${day}-plus`])
    : cx(classes[`task-box`], classes[`box-${day}`]);

  const iconBox = sevenPlus
    ? cx(classes["icon-box"], classes[`icon-box-${day}-plus`])
    : cx(classes["icon-box"], classes[`icon-box-${day}`]);

  return (
    <div className={taskBox}>
      <div className={iconBox}>{<IconComponent />}</div>
      <div className={classes["text-box"]}>
        {<p>{subject}</p>}
        <span>{action}</span>
        {day === 7 || sevenPlus ? (
          <span className={classes["task-notification"]}>1</span>
        ) : null}
      </div>
    </div>
  );
};

export default TaskBox;
