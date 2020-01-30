import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

const SearchHistory = ({ match }) => {
  const styles = useStyles();
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState('');
  const matches = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    /*  const artistName = match.params.artist.split('-').join(' ');
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
    };
    getArtist();
    getAlbums(); */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatBio = text => {
    return text.substr(0, text.indexOf('<a href'));
  };

  return (
    <Container className={styles.Container} maxWidth='sm'>
      <div className={styles.Header}>
        <img src={logo} alt='logo' className={styles.logo} />
      </div>
      <Paper elevation={3} className={styles.containerHistory}>
        <Typography
          className={styles.titleContent}
          variant='subtitle1'
          color='secondary'
          align='center'
        >
          Seu histórico de busca
        </Typography>
        <p className={styles.history}>29/01/2019 13:18 - Teste de consulta</p>
        <p className={styles.history}>29/01/2019 13:18 - Teste de consulta</p>
        <p className={styles.history}>29/01/2019 13:18 - Teste de consulta</p>
        <p className={styles.history}>29/01/2019 13:18 - Teste de consulta</p>
        <p className={styles.history}>29/01/2019 13:18 - Teste de consulta</p>
      </Paper>
    </Container>
  );
};

export default SearchHistory;
