
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React,{useState,useCallback} from "react"
import Header from "./components/Header/Header";
import Activities from "./Activities";
import Homepage from "./components/Homepage/Homepage"
import BannerCookies from "./components/BannerCookies/BannerCookies"

function App() {
  const [isBannerVisible,setIsBannerVisible]=useState(localStorage.getItem("cookieSession"));

   const cookieSession=useCallback(()=> {
        const date = JSON.stringify(new Date());
        localStorage.setItem("cookieSession", `date:${date}`);
        setIsBannerVisible(true)
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
