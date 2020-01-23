import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import logo from '../../assets/logo.svg';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';

import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const Albums = () => {
  const styles = useStyles();
  const history = useHistory();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const response = await api.get('/', {
        params: {
          format: 'json',
          method: 'artist.gettopalbums',
          artist: 'Justin Biber',
          api_key: '0c87b1c937645d216bda842e84fc5cfe',
          limit: 12,
          page: 1
        }
      });
      console.log(response.data.topalbums.album);
      setAlbums(response.data.topalbums.album);
    };
    getAlbums();
  }, []);

  return (
    <Container className={styles.Container} maxWidth='sm'>
      <div className={styles.Header}>
        <Avatar alt='Remy Sharp' src={logo} className={styles.avatar} />
        <div className={styles.artistInfo}>
          <h1 className={styles.artistName}>Harsey</h1>
          <h1 className={styles.playcount}>689.152 ouvintes</h1>
        </div>
        <Paper elevation={3} component='form' className={styles.searchBar}>
          <InputBase
            className={styles.input}
            placeholder='Pesquise por um album...'
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
      <Paper elevation={3} className={styles.albumInfo}>
        <GridList cellHeight={150} cols={3} className={styles.gridList}>
          <GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
            <ListSubheader component='div'>Albums</ListSubheader>
          </GridListTile>
          {albums.map(album => (
            <GridListTile key={album.url}>
              <img src={album.image[2]['#text']} alt={album.name} />
              <GridListTileBar
                title={album.name}
                subtitle={<span>{album.playcount} ouvintes</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about`}
                    className={styles.icon}
                    href={album.url}
                  >
                    <InfoIcon color='primary' />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    </Container>
  );
};

export default Albums;
