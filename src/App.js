import Header from "./Components/Header//Header";
import Timeline from "./Components/Main/Timeline/Timeline"

import classes from "./App.module.css";
import ResultsCard from "./Components/Main/Results/ResultsCard";

const App = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Timeline />
      <ResultsCard/>
    </div>
  );
};

export default App;
