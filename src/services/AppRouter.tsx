import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";

const AppRouter: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div>Home</div>
        </Route>
        <Route exact path='/about'>
          <div>About</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export { AppRouter }
