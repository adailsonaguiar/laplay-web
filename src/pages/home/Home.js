import React, { useState, useEffect } from 'react';
import { useStyles } from './styles.js';
import Sidebar from '../../components/sidebar/Sidebar';
import Container from '@material-ui/core/Container';
import logo from '../../assets/logo.svg';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
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
    console.log(response.data.results.artistmatches.artist);
  };

  return (
    <>
      <Sidebar />
      <Container className={styles.Container} maxWidth='sm'>
        <div className={styles.form}>
          <img src={logo} alt='logo' className={styles.logo} />
          <Paper
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
        {artist.map(album => (
          <Paper key={album.url} elevation={3} className={styles.albumInfo}>
            <h3>{album.name}</h3>
            <h4>{album.listeners}</h4>
            <Avatar
              variant='square'
              className={styles.albumImage}
              alt={album.name}
              src={album.image[2]['#text']}
            />
          </Paper>
        ))}
      </Container>
    </>
  );
};

export default Home;
