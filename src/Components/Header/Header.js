import UserIcons from "./UserIcons";
import LogoAndTitle from "./LogoAndTitle";

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
