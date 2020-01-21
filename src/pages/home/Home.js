import React from 'react';
import { useStyles } from './styles.js';
import Sidebar from '../../components/sidebar/Sidebar';
import Container from '@material-ui/core/Container';
import logo from '../../assets/logo.svg';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Home() {
  const styles = useStyles();

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Sidebar />
      <Container className={styles.Container} maxWidth='sm'>
        <div className={styles.form}>
          <img src={logo} alt='logo' className={styles.logo} />
          <Paper component='form' className={styles.paper}>
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
        <div className={styles.albumInfo}></div>
        <div className={styles.albumInfo}></div>
        <div className={styles.albumInfo}></div>
      </Container>
    </>
  );
}
