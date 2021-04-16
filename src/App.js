import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import { useState, useCallback } from "react";
import BannerCookies from "./components/BannerCookies/BannerCookies.jsx";
import Footer from "./components/Footer/Footer";
import Activity from "./pages/Activity.jsx";
import "./App.css";

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(
    localStorage.getItem("cookieSession")
  );

  const cookieSession = useCallback(() => {
    const date = JSON.stringify(new Date());
    localStorage.setItem("cookieSession", `date:${date}`);
    setIsBannerVisible(true);
    return;
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/activities/:activityUuid">
              <Activity />
            </Route>
          </Switch>
          <BannerCookies
            isBannerVisible={isBannerVisible}
            setVisibleBanner={cookieSession}
          />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
