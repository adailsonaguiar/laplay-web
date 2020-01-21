import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';

/* const PrivateRoute = ({ component: Component, ...rest }) => (
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
); */
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*         <PrivateRoute exact path='/' component={home} />
         */}{' '}
        {/* <Route exact path='/' component={home} /> */}
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
