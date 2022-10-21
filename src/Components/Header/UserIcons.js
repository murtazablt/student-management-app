import classes from "./UserIcons.module.css";
import images from "../../Assets/Images/index";
import icons from "../../Assets/Icons";

const UserIcons = () => {
  return (
    <div className={classes["user-icons"]}>
      <div className={classes["user-icon"]}>
        <a href="#">{icons.bell}</a>
      </div>
      <div className={classes["user-icon"]}>
        <a href="#">{icons.apps}</a>
      </div>
      <div className={classes["user-icon"]}>
        <a href="#">{icons.questionMark}</a>
      </div>
      <div className={classes["user-icon"]}>
        <a href="#">{icons.ellipsisV}</a>
      </div>
      <div className={classes["user-img"]}>
        <a href="#">
          <img src={images.user1} alt="User Image" />
        </a>
      </div>
    </div>
  );
};

export default UserIcons;
