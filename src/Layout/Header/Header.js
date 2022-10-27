import UserIcons from "../../Components/Header/UserIcons/UserIcons";
import LogoAndTitle from "../../Components/Header/LogoAndTitle/LogoAndTitle";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <LogoAndTitle />
      <UserIcons />
    </div>
  );
};

export default Header;
