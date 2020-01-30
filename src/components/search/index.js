import React, { useState } from 'react';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import logo from '../../assets/logo.svg';
import firebase from 'firebase';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';
import FilterNone from '@material-ui/icons/FilterNone';

import api from '../../services/api';

import { formatUrl } from '../../utils/Functions';

const Home = () => {
  const styles = useStyles();
  const [artistSearch, setArtistSearch] = useState('');
  const [artists, setArtists] = useState([]);

  const getArtists = async e => {
    e.preventDefault();
    if (artistSearch.length > 0) {
      const response = await api.get('/', {
        params: {
          method: 'artist.search',
          artist: artistSearch,
          api_key: '0c87b1c937645d216bda842e84fc5cfe',
          format: 'json',
          limit: 10
        }
      });
      setArtists(response.data.results.artistmatches.artist);
      addSearchHistory(artistSearch);
    }
  };

  const addSearchHistory = async artistSearch => {
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    const body = {
      datetime: Date.now(),
      artistSearch
    };
    await firebase
      .database()
      .ref(`historic/${uid}`)
      .push(body);
  };

  const formatNameArtist = name => {
    if (name.length > 20) {
      return `${name.substr(0, 20)}...`;
    }
    return name;
  };

  return (
    <Container className={styles.Container} maxWidth='sm'>
      <div className={styles.form}>
        <img src={logo} alt='logo' className={styles.logo} />
        <Paper
          elevation={3}
          component='form'
          onSubmit={getArtists}
          className={styles.searchBar}
        >
          <InputBase
            className={styles.input}
            autoFocus
            placeholder='Pesquise por seu artista ou album favorito...'
            inputProps={{ 'aria-label': 'search google maps' }}
            value={artistSearch}
            onChange={e => {
              setArtistSearch(e.target.value);
            }}
          />
          <IconButton
            type='submit'
            className={styles.iconButton}
            aria-label='search'
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      {artists.map(artist => (
        <Paper key={artist.url} elevation={3} className={styles.artist}>
          <Avatar
            variant='square'
            className={styles.artistImage}
            alt={artist.name}
            src={artist.image[2]['#text']}
          />
          <div className={styles.artistInfo}>
            <div className={styles.artistNameLister}>
              <h3 className={styles.artistName}>
                {formatNameArtist(artist.name)}
              </h3>
              <h4 className={styles.artistListeners}>
                {artist.listeners} ouvintes
              </h4>
            </div>
            <Link href={`/#/albums/${formatUrl(artist.name)}`}>
              <div className={styles.artistAlbums}>
                <FilterNone color='primary' />
                <h4 className={styles.artistListeners}>Albums</h4>
              </div>
            </Link>
          </div>
        </Paper>
      ))}
    </Container>
  );
};

export default Home;
