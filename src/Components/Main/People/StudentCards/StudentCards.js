import classes from "./StudentCards.module.css";
import images from "../../../../Assets/Images";

import { Fragment } from "react";
import StudentItem from "./StudentItem/StudentItem";

const StudentCards = () => {
  const students = [
    { name: "Jane Doe", image: images.user1 },
    { name: "Smith Jacobs", image: images.user2 },
    { name: "Anna Ferguson", image: images.user3 },
    { name: "Adam Serudo", image: images.user4 },
    { name: "Michael Bu", image: images.user5 },
  ];

  return (
    <div className={classes["student-cards"]}>
      <div className={classes["student-card"]}>
        <h3 className={classes["student-card-title"]}>&#x1F3C6; Top 5</h3>
        <ul className={classes["students-list"]}>
          {students.map((student) => (
            <Fragment key={student.name}>
              <StudentItem studentInfo={student} />
            </Fragment>
          ))}
        </ul>
      </div>
      <div className={classes["student-card"]}>
        <h3 className={classes["student-card-title"]}>&#x1F198; Bottom 5</h3>
        <ul className={classes["students-list"]}>
          {students.map((student) => (
            <Fragment key={student.name}>
              <StudentItem studentInfo={student} />
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentCards;
