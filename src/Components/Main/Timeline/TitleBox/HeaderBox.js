import classes from "./HeaderBox.module.css";

import icons from "../../../../Assets/Icons/index/index";

const HeaderBox = () => {
  const { PresentationChart } = icons;
  return (
    <div className={classes["header-box"]}>
      <div className={classes.header}>
        <PresentationChart />
        <h1>Project 1 Timeline</h1>
      </div>
      <a href="#">Oversee and manage all activities</a>
    </div>
  );
};

export default HeaderBox;
