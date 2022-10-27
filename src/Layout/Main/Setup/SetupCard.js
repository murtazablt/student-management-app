import classes from "./SetupCard.module.css";
import icons from "../../../Assets/Icons/index/index";

import Title from "../../../Components/Main/Setup/Title/Title";
import Changes from "../../../Components/Main/Setup/Changes/Changes"

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





