import React, { useState, useEffect } from 'react';
import { useStyles } from './styles.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import logo from '../../assets/icon.svg';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
  const styles = useStyles();
  const history = useHistory();
  const [user, setUser] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const userLocal = JSON.parse(localStorage.getItem('user')).email;
      setUser(userLocal);
    }
  }, []);

  const logOut = async () => {
    await firebase.auth().signOut();
    localStorage.clear();
    history.push('/login');
  };

  return (
    <AppBar color='secondary' position='static'>
      <Toolbar variant='dense' className={styles.Toolbar}>
        <Link href='#'>
          <img src={logo} alt='logo' className={styles.logo} />
        </Link>
        <div className={styles.alignRow}>
          <Typography
            component='a'
            href='/#/history'
            variant='subtitle2'
            color='inherit'
            className={styles.menuItem}
          >
            histórico
          </Typography>
          <Typography
            variant='subtitle2'
            color='inherit'
            className={styles.menuItem}
          >
            {user}
          </Typography>
          <Button className={styles.logOut} onClick={logOut}>
            SAIR
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Sidebar;
