import { Switch, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import Album from '../../components/albums';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search';

const Home = () => {
  return (
    <HashRouter>
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/albums/:artist' component={Album} />
      </Switch>
    </HashRouter>
  );
};

export default Home;
