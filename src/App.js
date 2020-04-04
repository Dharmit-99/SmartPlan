import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./components/layout/NavBar.js"
import Dashboard from "./components/dashboard/Dashboard.js"
import ProjectDetails from "./components/project/ProjectDetails";
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateProject from "./components/project/CreateProject"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createproject" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;