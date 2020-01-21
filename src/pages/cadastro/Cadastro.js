import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/logo.svg';

import { useStyles } from './styles';

export default function Cadastro() {
  const classes = useStyles();

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img className={classes.logo} src={logo} alt='logo' />
          <form className={classes.form} noValidate>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Digite seu email'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Digite uma senha'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Re-digite sua senha'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <Grid container>
              <Grid item xs>
                <Link href='/login' variant='body2'>
                  Já possui conta com a gente?
                </Link>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              CADASTRAR
            </Button>
            <Box mt={1}>
              <Typography variant='body2' color='textDanger' align='center'>
                {`*Houve um erro`}
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
}
