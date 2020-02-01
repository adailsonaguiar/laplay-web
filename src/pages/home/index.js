import { Switch, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import Album from './albums';
import AlbumInfo from './album-info';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from './search';
import HistorySearch from './search-history';

const Home = () => {
  return (
    <HashRouter>
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/albums/:artist' component={Album} />
        <Route exact path='/album/:album/:artist' component={AlbumInfo} />
        <Route exact path='/history' component={HistorySearch} />
      </Switch>
    </HashRouter>
  );
};

export default Home;
