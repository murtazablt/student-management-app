import classes from "./StudentCards.module.css"
import images from "../../../../Assets/Images";


const StudentCards = () => {
  return (
    <div className={classes["student-cards"]}>
      <div className={classes["student-card"]}>
        <h3 className={classes["student-card-title"]}>&#x1F3C6; Top 5</h3>
        <ul className={classes["students-list"]}>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Jane Doe</p>
          </li>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Smith Jacobs</p>
          </li>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Anna Ferguson</p>
          </li>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Adam Serudo</p>
          </li>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Michael Bu</p>
          </li>
        </ul>
      </div>
      <div className={classes["student-card"]}>
        <h3 className={classes["student-card-title"]}>&#x1F198; Bottom 5</h3>
        <ul className={classes["students-list"]}>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Jane Doe</p>
          </li>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Smith Jacobs</p>
          </li>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Anna Ferguson</p>
          </li>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Adam Serudo</p>
          </li>
          <li className={classes["student-item"]}>
            <div className={classes["student-img-container"]}>
              <img src={images.user1} alt="Student 1" />
            </div>
            <p>Michael Bu</p>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default StudentCards