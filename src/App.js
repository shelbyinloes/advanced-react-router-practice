import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
// import Charts from "./components/Charts";
// import Tables from "./components/Tables";
// import Settings from "./components/Settings";
// import Wall from "./components/Wall";
// import Marquee from "./components/Marquee/:id";
// import Profile from "./profile/:id";
import Profiles from "./components/Profiles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/profile/:id" component={Profiles} />
                <Route path="/" component={Dashboard} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </div>

  );
}


export default App;
