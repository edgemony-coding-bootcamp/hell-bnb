import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Activities from "./Activities.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import Footer from "./components/Footer/Footer";

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
