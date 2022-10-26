import classes from "./Options.module.css";

const Options = () => {
  return (
    <div className={classes.options}>
      <div className={classes.option}>
        <a href="#"> &#x1F4CB; Edit the distribution</a>
      </div>
      <div className={classes.option}>
        <a href="#"> &#x1F453; Spot-check papers</a>
      </div>
      <div className={classes.option}>
        <a href="#"> &#x1F440; Choose what students see</a>
      </div>
    </div>
  );
};

export default Options;
