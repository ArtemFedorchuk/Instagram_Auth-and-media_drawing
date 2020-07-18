import React from 'react';
import { Switch, Route } from "react-router-dom";
import { routes } from './constants/'
import styles from './styles.module.scss';
import { SignUpPage, ProfilePage, PostPage } from './pages';

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path={routes.AUTH} component={SignUpPage} />
        <Route exact path={routes.PROFILE} component={ProfilePage}/>
        <Route exact path={routes.POST} component={PostPage}/>
      </Switch>
    </div>
  );
}

export default App;
