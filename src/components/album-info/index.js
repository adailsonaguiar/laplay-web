import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import { stylePattern } from '../../styles/albumsPattern';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import logo from '../../assets/icon.svg';
import api from '../../services/api';

import { formatSummary } from '../../utils/Functions';

const AlbumInfo = ({ match }) => {
  const styles = useStyles();
  const stylePt = stylePattern();
  const [album, setAlbum] = useState('');

  useEffect(() => {
    const artistName = match.params.artist.split('-').join(' ');
    const albumName = match.params.album.split('-').join(' ');
    const getAlbumInfo = async () => {
      if (artistName) {
        const response = await api.get('/', {
          params: {
            format: 'json',
            method: 'album.getinfo',
            artist: artistName,
            album: albumName,
            api_key: '0c87b1c937645d216bda842e84fc5cfe'
          }
        });
        const error = response.data['error'] === 6 ? true : false;
        if (!error) {
          setAlbum(response.data.album);
          console.log(response.data.album);
        }
      }
    };

    getAlbumInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={stylePt.Container} maxWidth='sm'>
      <div className={stylePt.Header}>
        <img
          className={stylePt.avatar}
          alt={album ? album.name : ''}
          src={album ? album.image[3]['#text'] : logo}
        />
        <div className={stylePt.headerInfo}>
          <Typography
            className={stylePt.nameComp}
            variant='h1'
            color='secondary'
            align='center'
          >
            {album ? album.name : ''}
          </Typography>
          <Typography variant='subtitle2' color='secondary' align='center'>
            {`Por ${album ? album.artist : ''}`}
          </Typography>
        </div>
      </div>
      <Paper elevation={3} className={stylePt.stylePaper}>
        {album ? (
          album.wiki ? (
            <>
              <Typography
                className={stylePt.headerPaper}
                variant='subtitle1'
                color='secondary'
                align='center'
              >
                SOBRE O ALBUM
              </Typography>
              <Divider light />
              <p className={styles.summary}>
                {album
                  ? album.wiki
                    ? formatSummary(album.wiki.content)
                    : ''
                  : ''}
              </p>
            </>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        <div>
          <Typography
            className={stylePt.headerPaper}
            variant='subtitle2'
            color='secondary'
            align='center'
          >
            MÚSICAS
          </Typography>
          {album
            ? album.tracks.track.map(track => (
                <Chip
                  key={track.url}
                  color='primary'
                  label={track.name}
                  component='a'
                  href={track.url}
                  clickable
                  className={styles.music}
                />
              ))
            : ''}
        </div>
      </Paper>
    </Container>
  );
};

export default AlbumInfo;
