import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Activities from "./Activities.jsx";

import ActivityCard from './Components/ActivityCard/ActivityCard';

import img from './Components/ActivityCard/img.jpeg';

function App() {
  return (
    <Router>
      <div className="App">

        <ActivityCard
          img = {img}
          rate = {4.93}
          number = {204}
          country = {'Argentina'}
          title = {'Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum'}
          price = {7}/>

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
