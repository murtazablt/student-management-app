import classes from "./People.module.css";

import icons from "../../../Assets/Icons/index";
import images from "../../../Assets/Images";

const People = () => {
  const { Search } = icons;

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes["title-box"]}>
          <div className={classes.title}>
            <h1> &#x1F393; People</h1>
            <p>
              <a href="#">Manage all students and their information</a>
            </p>
          </div>
          <form action="#" className={classes["search-form"]}>
            <input
              type="text"
              className={classes["search-input"]}
              placeholder="Search by name"
            />
            <button className={classes["search-button"]}>
              <Search />
            </button>
          </form>
        </div>
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
            <h3 className={classes["student-card-title"]}>
              &#x1F198; Bottom 5
            </h3>
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
        <div className={classes.options}>
          <div className={classes.option}>
            <a href="#"> &#x1F4CB; Add new instructor</a>
          </div>

          <div className={classes.option}>
            <a href="#"> &#x1F440; Manage Students</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
