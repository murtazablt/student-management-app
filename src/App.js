import Header from "./Components/Header//Header";
import Timeline from "./Components/Main/Timeline/Timeline"
import ResultsCard from "./Components/Main/Results/ResultsCard";
import People from "./Components/Main/People/People"

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Timeline />
      <ResultsCard/>
      <People/>
    </div>
  );
};

export default App;
