import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Activities from "./Activities.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
           {/**homepage **/}
          </Route>
          <Route exact path="/activities/:id">
            <Activities />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
