import classes from "./SettingsBox.module.css";

const SettingsBox = () => {
  return (
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
  );
};

export default SettingsBox;
