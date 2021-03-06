import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import { stylePattern } from '../../../styles/albumsPattern';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import logo from '../../../assets/icon.svg';
import api from '../../../services/api';

import { formatUrl, formatSummary } from '../../../utils/Functions';

import Pagination from '../../../components/pagination';

const Albums = ({ match }) => {
  const styles = useStyles();
  const stylePt = stylePattern();
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState('');
  const [resultsPerPage] = useState(12);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const matches = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const artistName = match.params.artist.split('-').join(' ');
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
    getAlbums(resultsPerPage, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAlbums = async (resultsPerPage, page) => {
    const artistName = match.params.artist.split('-').join(' ');
    if (artistName) {
      const response = await api.get('/', {
        params: {
          format: 'json',
          method: 'artist.gettopalbums',
          artist: artistName,
          api_key: '0c87b1c937645d216bda842e84fc5cfe',
          limit: resultsPerPage,
          page: page
        }
      });
      const error = response.data['error'] === 6 ? true : false;
      if (!error) {
        setAlbums(response.data.topalbums.album);
        setPage(response.data.topalbums['@attr'].page);
        setTotalPages(response.data.topalbums['@attr'].totalPages);
      }
    }
  };

  const changePageNext = async () => {
    // eslint-disable-next-line eqeqeq
    if (page != totalPages) {
      let currentPage = Number(page) + 1;
      getAlbums(resultsPerPage, currentPage);
    }
  };

  const changePagePrev = () => {
    if (page > 1) {
      let currentPage = Number(page) - 1;
      getAlbums(resultsPerPage, currentPage);
    }
  };

  const getGridListCols = () => {
    if (matches) {
      return 1;
    }
    return 3;
  };

  return (
    <Container className={stylePt.Container} maxWidth='sm'>
      <div className={stylePt.Header}>
        <img
          className={stylePt.avatar}
          alt={artist ? artist.name : ''}
          src={albums[0] ? albums[0].image[3]['#text'] : logo}
        />
        <div className={stylePt.headerInfo}>
          <Typography
            className={stylePt.nameComp}
            variant='h1'
            color='secondary'
            align='center'
          >
            {artist ? artist.name : ''}
          </Typography>
          <Chip
            color='primary'
            label={`${
              artist ? Number(artist.stats.listeners).toLocaleString() : 0
            } ouvintes`}
          />
        </div>
      </div>
      <Paper elevation={3} className={stylePt.stylePaper}>
        <div className={styles.bio}>
          <Typography
            className={styles.artistBio}
            variant='subtitle1'
            color='secondary'
            align='center'
          >
            {artist ? formatSummary(artist.bio.content) : ''}
          </Typography>
        </div>
        <Divider light />
        <GridList
          cellHeight={150}
          cols={getGridListCols()}
          className={styles.gridList}
        >
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
                    href={formatUrl(
                      `/#/album/${album.name}/${album.artist.name}`
                    )}
                  >
                    <InfoIcon color='primary' />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        <Pagination
          page={page}
          changePageNext={() => changePageNext()}
          changePagePrev={() => changePagePrev()}
          totalPage={totalPages}
        />
      </Paper>
    </Container>
  );
};

export default Albums;
