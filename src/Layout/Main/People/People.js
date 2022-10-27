import classes from "./People.module.css";

import Title from "../../../Components/Main/People/Title/Title";
import StudentCards from "../../../Components/Main/People/StudentCards/StudentCards";
import Options from "../../../Components/Main/People/Options/Options";

const People = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Title />
        <StudentCards />
        <Options />
      </div>
    </div>
  );
};

export default People;
