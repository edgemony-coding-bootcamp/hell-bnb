import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Activities from "./Activities.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx"
import {useState,useCallback} from "react"
import BannerCookies from "./Components/BannerCookies/BannerCookies.jsx"

function App() {
  const [isBannerVisible,setIsBannerVisible]=useState(localStorage.getItem("cookieSession"));

   const cookieSession=useCallback(()=> {
        const date = JSON.stringify(new Date());
        localStorage.setItem("cookieSession", `date:${date}`);
        setIsBannerVisible(true)
        return;
    },[])
  

  return (
    <>
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
        <BannerCookies isBannerVisible={isBannerVisible} setVisibleBanner={cookieSession}/>
      </div>
    </Router>
    </>
  );
}

export default App;
