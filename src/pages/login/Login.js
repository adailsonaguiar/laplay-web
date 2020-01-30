import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/logo.svg';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './styles';

const Login = () => {
  const styles = useStyles();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [erroMessage, setErroMessage] = useState('');

  const authenticate = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const userAuthenticate = await firebase
        .auth()
        .signInWithEmailAndPassword(user, password);
      setLoading(false);
      localStorage.setItem('user', JSON.stringify(userAuthenticate.user));
      history.push('/');
    } catch (erro) {
      console.log(erro);
      setLoading(false);
      verifyErrors(erro);
    }
  };

  const verifyErrors = erro => {
    if (erro.code === 'auth/wrong-password') {
      setErroMessage('*Senha incorreta!');
    }
    if (erro.code === 'auth/invalid-email') {
      setErroMessage('*E-mail inválido!');
    }
    if (erro.code === 'auth/user-not-found') {
      setErroMessage('*E-mail não cadastrado!');
    }
  };

  return (
    <Grid container component='main' className={styles.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={styles.paper}>
          <img className={styles.logo} src={logo} alt='logo' />
          <form className={styles.form} onSubmit={authenticate} noValidate>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Digite seu e-mail'
              name='email'
              autoComplete='email'
              value={user}
              onChange={e => {
                setUser(e.target.value);
                setErroMessage('');
              }}
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Digite sua senha'
              type='password'
              id='password'
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                setErroMessage('');
              }}
              autoComplete='current-password'
            />
            <Grid container>
              <Grid item xs>
                <Link href='/cadastro' variant='body2'>
                  Ainda não tem conta com a gente?
                </Link>
              </Grid>
            </Grid>
            {loading ? (
              <CircularProgress />
            ) : (
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={styles.submit}
              >
                ENTRAR
              </Button>
            )}
            <Box mt={1}>
              <Typography variant='body2' color='textDanger' align='center'>
                {`${erroMessage}`}
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant='body2' color='textSecondary' align='center'>
                {`Copyright © laplay ${new Date().getFullYear()}.`}
              </Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
