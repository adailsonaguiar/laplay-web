import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import { onAuth } from './config/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      onAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
