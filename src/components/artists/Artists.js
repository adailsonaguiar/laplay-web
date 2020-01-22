import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../assets/icon.svg';
import { useHistory } from 'react-router-dom';

const Artists = () => {
  const history = useHistory();
  const [user, setUser] = useState('');

  return <h1>Artists works!</h1>;
};

export default Artists;
