import React from 'react';
import { Switch, Route } from "react-router-dom";
import { routes } from './constants/'
import styles from './styles.module.scss';
import { SignUpPage } from './pages';
import Profile from './molecules/Redirect';
import Post from './molecules/User';

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path={routes.AUTH} component={SignUpPage} />
        <Route exact path={routes.Profile} component={Profile}/>
        <Route exact path={routes.POST} component={Post}/>
      </Switch>
    </div>
  );
}

export default App;
