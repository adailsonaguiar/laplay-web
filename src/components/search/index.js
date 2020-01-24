import React, { useState } from 'react';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import logo from '../../assets/logo.svg';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';
import FilterNone from '@material-ui/icons/FilterNone';

import api from '../../services/api';

const Home = () => {
  const styles = useStyles();
  const [artist, setArtist] = useState([]);

  const getAlbum = async e => {
    e.preventDefault();
    const response = await api.get('/', {
      params: {
        method: 'artist.search',
        artist: 'Halsey',
        api_key: '0c87b1c937645d216bda842e84fc5cfe',
        format: 'json'
      }
    });
    setArtist(response.data.results.artistmatches.artist);
  };

  return (
    <Container className={styles.Container} maxWidth='sm'>
      <div className={styles.form}>
        <img src={logo} alt='logo' className={styles.logo} />
        <Paper
          elevation={3}
          component='form'
          onSubmit={getAlbum}
          className={styles.searchBar}
        >
          <InputBase
            className={styles.input}
            placeholder='Pesquise por seu artista ou album favorito...'
            inputProps={{ 'aria-label': 'search google maps' }}
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
      {artist.map(artist => (
        <Paper key={artist.url} elevation={3} className={styles.artist}>
          <Avatar
            variant='square'
            className={styles.artistImage}
            alt={artist.name}
            src={artist.image[2]['#text']}
          />
          <div className={styles.artistInfo}>
            <div className={styles.artistNameLister}>
              <h3 className={styles.artistName}>{artist.name}</h3>
              <h4 className={styles.artistListeners}>
                {artist.listeners} ouvintes
              </h4>
            </div>
            <Link href={`/#/albums/${artist.name}`}>
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
