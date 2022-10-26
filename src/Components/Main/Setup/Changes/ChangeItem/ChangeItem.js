import classes from "./ChangeItem.module.css";

const ChangeItem = ({ changeItemInfo }) => {
  return (
    <li className={classes["change-item"]} key={changeItemInfo.changeName}>
      <a href="#" className={classes["change-item-link"]}>
        <div className={classes["change-icon"]}>
          <changeItemInfo.icon />
        </div>
        <p>{changeItemInfo.changeName}</p>
      </a>
    </li>
  );
};

export default ChangeItem;
