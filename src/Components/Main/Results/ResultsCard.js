import classes from "./ResultsCard.module.css";

import Title from "./Title/Title";
import ChartCards from "./ChartCards/ChartCards"
import Options from "./Options/Options";

const ResultsCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Title />
        <ChartCards />
        <Options />
      </div>
    </div>
  );
};

export default ResultsCard;



