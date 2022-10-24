import classes from "./NowLine.module.css"



const NowLine = () => {
  return (
    <div className={classes["now-line-box"]}>
      <div className={classes["now-text"]}>Now</div>
      <div className={classes["now-line"]}></div>
    </div>
  );
};


export default NowLine