import classes from "./StudentItem.module.css";

const StudentItem = ({ studentInfo }) => {
  return (
    <li className={classes["student-item"]}>
      <div className={classes["student-img-container"]}>
        <img src={studentInfo.image} alt={studentInfo.name} />
      </div>
      <p>{studentInfo.name}</p>
    </li>
  );
};

export default StudentItem;
