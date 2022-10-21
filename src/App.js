import Header from "./Components/Header//Header";
import Timeline from "./Components/Main/Timeline/Timeline"

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Timeline />
    </div>
  );
};

export default App;
