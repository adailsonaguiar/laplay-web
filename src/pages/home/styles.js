import { withStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  buttonSearch: {
    borderRadius: 24,
    width: 183,
    height: 34
  },
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    width: 222
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    width: 400,
    borderRadius: 24,
    marginTop: 35
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  albumInfo: {
    background: '#fff',
    width: 419,
    height: 68,
    borderRadius: 6,
    marginTop: 30
  }
}));
