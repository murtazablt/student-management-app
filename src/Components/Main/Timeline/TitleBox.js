import classes from "./TitleBox.module.css";
import icons from "../../../Assets/Icons";

const TitleBox = () => {
  return (
    <div className={classes["title-box"]}>
      <div className={classes["header-box"]}>
        <div className={classes.header}>
          {icons.presentationChart}
          <h1>Project 1 Timeline</h1>
        </div>
        <a href="#">Oversee and manage all activities</a>
      </div>

      <div className={classes["settings-box"]}>
        <div className={classes["settings-link"]}>
          <a href="^#"> Edit timeline</a>
        </div>
        <div className={classes["settings-link"]}>
          <a href="#"> Edit rubric</a>
        </div>
        <div className={classes["settings-link"]}>
          <a href="#"> More settings</a>
        </div>
      </div>
    </div>
  );
};

export default TitleBox;
