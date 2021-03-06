import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import JournalScreen from '../Components/journal/JournalScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter}/>

        <Route exact path="/" component={JournalScreen}/>

        <Redirect to="/auth/login" />
        

      </Switch>
    </Router>
    </>
  )
}

export default AppRouter

