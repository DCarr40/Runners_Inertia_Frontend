import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import CreateEvent from "./components/Pages/Events/createEvent";
import { RegisterForm } from "./components/Forms/registerForm";
import Homepage from "./components/Pages/Homepage/homepage";
import Forecast from "./components/Pages/Forecast/forecast";
import Loginpage from "./components/Pages/Login/loginPage";
import CreateRunGroup from "./components/Pages/RunGroup/createRunGroup";
import Map from "./components/Map/map";
import { GroupPage } from "./components/Pages/RunGroup/groupPage";
import { EventPage } from "./components/Pages/Events/eventPage";
import MyEventsPage from "./components/Pages/Events/myEventsPage";
import UpdateEvent from "./components/Pages/Events/updateEvent";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact component={Loginpage} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/homepage" exact component={Homepage} />
          <Route path="/forecast" exact component={Forecast} />
          <Route path="/createEvent" exact component={CreateEvent} />
          <Route path="/updateEvent" exact component={UpdateEvent} />
          <Route path="/createGroup" exact component={CreateRunGroup} />
          <Route path="/map" exact component={Map} />
          <Route path="/groupPage" exact component={GroupPage} />
          <Route path="/eventPage" exact component={EventPage} />
          <Route path="/myEventsPage" exact component={MyEventsPage} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
