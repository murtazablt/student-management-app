import classes from "./Options.module.css";

const Options = () => {
  return (
    <div className={classes.options}>
      <div className={classes.option}>
        <a href="#"> &#x1F4CB; Add new instructor</a>
      </div>

      <div className={classes.option}>
        <a href="#"> &#x1F440; Manage Students</a>
      </div>
    </div>
  );
};

export default Options;
