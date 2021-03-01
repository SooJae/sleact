import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
// import LogIn from '@pages/LogIn';
// import SignUp from '@pages/SignUp';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/logIn" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
