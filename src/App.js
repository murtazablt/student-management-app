import Header from "./Components/Header//Header";
import Timeline from "./Components/Main/Timeline/Timeline"
import ResultsCard from "./Components/Main/Results/ResultsCard";
import People from "./Components/Main/People/People"
import SetupCard from "./Components/Main/Setup/SetupCard";

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
