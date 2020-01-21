import React from 'react';
import { useStyles } from './styles.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../assets/icon.svg';

function Sidebar() {
  const styles = useStyles();
  return (
    <AppBar color='secondary' position='static'>
      <Toolbar variant='dense' className={styles.Toolbar}>
        <img src={logo} alt='logo' className={styles.logo} />
        <div className={styles.alignRow}>
          <Typography variant='subtitle2' color='inherit'>
            adailsonacj@live.com
          </Typography>
          <Button color='primary'>SAIR</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Sidebar;
