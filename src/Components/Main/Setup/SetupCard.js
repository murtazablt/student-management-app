import classes from "./SetupCard.module.css";

import icons from "../../../Assets/Icons/index";

const SetupCard = () => {
  const { List, Flag, At, Duplicate, Reload, EllipsisH } = icons.setupIcons;
  const changes = [
    { changeName: "Rubric", icon: List },
    { changeName: "Deadlines", icon: Flag },
    { changeName: "Rename", icon: At },
    { changeName: "Duplicate", icon: Duplicate },
    { changeName: "Recalculate grades", icon: Reload },
    { changeName: "More settings", icon: EllipsisH },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h1> Setup</h1>
          <p>
            <a href="#">Adjust the assisgnment settings</a>
          </p>
        </div>
        <div className={classes["change-cards"]}>
          <div className={classes["change-card"]}>
            <h3 className={classes["change-card-title"]}>Make Changes</h3>
            <ul className={classes["changes-list"]}>
              {changes.map((change) => (
                <li className={classes["change-item"]} key={change.changeName}>
                  <a href="#" className={classes["change-item-link"]}>
                    <div className={classes["change-icon"]}>
                      <change.icon />
                    </div>
                    <p>{change.changeName}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupCard;
