import classes from "./SetupCard.module.css";
import icons from "../../../Assets/Icons/index";

import Title from "./Title/Title";
import Changes from "./Changes/Changes"

const SetupCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Title />
        <Changes />
      </div>
    </div>
  );
};

export default SetupCard;





