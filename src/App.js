import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import  Dashboard  from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/projects/CreateProject";
import ProjectDetais from "./components/projects/ProjectDetails";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetais} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/new' component={CreateProject} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
