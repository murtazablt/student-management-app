import icons from "../../../../Assets/Icons/index";
import classes from "./Changes.module.css";

import ChangeItem from "./ChangeItem/ChangeItem"

const Changes = () => {
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
    <div className={classes["changes-card"]}>
      <div className={classes["change-card"]}>
        <h3 className={classes["change-card-title"]}>Make Changes</h3>
        <ul className={classes["changes-list"]}>
          {changes.map((changeItemInfo) => (
            <ChangeItem changeItemInfo={changeItemInfo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Changes;
