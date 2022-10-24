import classes from "./TitleBox.module.css";

import HeaderBox from "./HeaderBox";
import SettingsBox from "./SettingsBox";

const TitleBox = () => {
  return (
    <div className={classes["title-box"]}>
      <HeaderBox />
      <SettingsBox />
    </div>
  );
};

export default TitleBox;
