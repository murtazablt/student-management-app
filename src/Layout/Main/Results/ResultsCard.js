import classes from "./ResultsCard.module.css";

import Title from "../../../Components/Main/Results/Title/Title";
import ChartCards from "../../../Components/Main/Results/ChartCards/ChartCards"
import Options from "../../../Components/Main/Results/Options/Options";

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



