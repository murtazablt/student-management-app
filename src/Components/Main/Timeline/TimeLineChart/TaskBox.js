import classes from "./TaskBox.module.css";
import cx from "classnames";

const TaskBox = ({ subject, action, day, IconComponent, sevenPlus }) => {
  const taskBox7Plus = sevenPlus
    ? cx(classes[`task-box`], classes[`box-${day}-plus`])
    : cx(classes[`task-box`], classes[`box-${day}`]);

  const iconBox7Plus = sevenPlus
    ? cx(classes["icon-box"], classes[`icon-box-${day}-plus`])
    : cx(classes["icon-box"], classes[`icon-box-${day}`]);

  return (
    <div className={taskBox7Plus}>
      <div className={iconBox7Plus}>{<IconComponent />}</div>
      <div className={classes["text-box"]}>
        {<p>{subject}</p>}
        <span>{action}</span>
      </div>
    </div>
  );
};

export default TaskBox;
