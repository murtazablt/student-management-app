import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.title}>
      <h1> &#x1F389; Results</h1>
      <p>
        <a href="#">Review and adjust grades for everyone</a>
      </p>
    </div>
  );
};

export default Title;
