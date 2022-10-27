import Header from "./Layout/Header/Header";
import Timeline from "./Layout/Main/Timeline/Timeline"
import ResultsCard from "./Layout/Main/Results/ResultsCard";
import People from "./Layout/Main/People/People"
import SetupCard from "./Layout/Main/Setup/SetupCard";

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Timeline />
      <ResultsCard/>
      <People/>
      <SetupCard/>
    </div>
  );
};

export default App;
