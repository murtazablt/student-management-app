import classes from "./People.module.css";

import Title from "./Title/Title";
import StudentCards from "./StudentCards/StudentCards";
import Options from "./Options/Options";

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
