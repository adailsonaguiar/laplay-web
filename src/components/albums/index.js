import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import api from '../../services/api';

const Albums = ({ match }) => {
  const styles = useStyles();
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState('');

  useEffect(() => {
    const artistName = match.params.artist.split('-').join(' ');
    const getAlbums = async () => {
      if (artistName) {
        const response = await api.get('/', {
          params: {
            format: 'json',
            method: 'artist.gettopalbums',
            artist: artistName,
            api_key: '0c87b1c937645d216bda842e84fc5cfe',
            limit: 12,
            page: 1
          }
        });
        const error = response.data['error'] === 6 ? true : false;
        if (!error) {
          setAlbums(response.data.topalbums.album);
        }
      }
    };
    const getArtist = async () => {
      const response = await api.get('/', {
        params: {
          method: 'artist.getinfo',
          artist: artistName,
          api_key: '0c87b1c937645d216bda842e84fc5cfe',
          format: 'json'
        }
      });
      setArtist(response.data.artist);
      console.log(response.data.artist);
    };
    getArtist();
    getAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatBio = text => {
    return text.substr(0, text.indexOf('<a href'));
  };

  return (
    <Container className={styles.Container} maxWidth='sm'>
      <div className={styles.Header}>
        <Avatar
          className={styles.avatar}
          variant='square'
          alt={artist.name}
          src={albums[0] ? albums[0].image[3]['#text'] : ''}
        />
        <div className={styles.artistInfo}>
          <Typography
            className={styles.artistName}
            variant='h1'
            color='secondary'
            align='center'
          >
            {artist.name}
          </Typography>
          <Chip
            color='primary'
            label={`${
              artist.stats ? Number(artist.stats.listeners).toLocaleString() : 0
            } ouvintes`}
          />
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
        <div className={styles.bio}>
          <Typography
            className={styles.artistBio}
            variant='subtitle1'
            color='secondary'
            align='center'
          >
            {artist.bio ? formatBio(artist.bio.content) : ''}
          </Typography>
        </div>
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
