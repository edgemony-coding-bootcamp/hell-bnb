import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Activities from "./Activities.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/activities/:id">
            <Activities />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
