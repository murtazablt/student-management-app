import classes from "./UserIcons.module.css";
import images from "../../../Assets/Images/index";
import icons from "../../../Assets/Icons/index/index";

const UserIcons = () => {
  const { Bell, Apps, QuestionMark, EllipsisV } = icons;

  return (
    <div className={classes["user-icons"]}>
      <div className={classes["user-icon"]}>
        <a href="#" className={classes["user-icon-link"]}>
          <Bell />
        </a>
      </div>
      <div className={classes["user-icon"]}>
        <a href="#" className={classes["user-icon-link"]}>
          <Apps />
        </a>
      </div>
      <div className={classes["user-icon"]}>
        <a href="#" className={classes["user-icon-link"]}>
          <QuestionMark />
        </a>
      </div>
      <div className={classes["user-icon"]}>
        <a href="#" className={classes["user-icon-link"]}>
          <EllipsisV />
        </a>
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
