import classes from "./LogoAndTitle.module.css";
import icons from "../../Assets/Icons/index";

const LogoAndTitle = () => {
  return (
    <div className={classes["logo-and-title"]}>
      <div className={classes.logo}>{icons.logoSVG}</div>
      <div className={classes.direction}>
        <a href="#">Wharton</a>  &gt; <a href="#">STAT476</a>  &gt; <span>Project 1</span>
      </div>
    </div>
  );
};

export default LogoAndTitle;
