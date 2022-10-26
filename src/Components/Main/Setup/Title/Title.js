import classes from "./Title.module.css"


const Title = () => {
  return (
    <div className={classes.title}>
      <h1> Setup</h1>
      <p>
        <a href="#">Adjust the assisgnment settings</a>
      </p>
    </div>
  );
};

export default Title;
