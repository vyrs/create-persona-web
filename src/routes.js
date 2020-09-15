import React from 'react';
import { BrowserRouter,Switch,Route} from "react-router-dom"

import Home from "./pages/Home";
import UserForm from "./pages/UserForm";
import Persona from "./pages/Persona"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/user" component={UserForm}></Route>
        <Route path="/persona/:ownerId" component={Persona}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;