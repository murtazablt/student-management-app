import classes from "./Title.module.css";
import icons from "../../../../Assets/Icons/index";

const Title = () => {
  const { Search } = icons;
  return (
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
  );
};

export default Title;
