import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
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
  searchBar: {
    padding: '2px 4px',
    display: 'flex',
    width: 400,
    borderRadius: 24,
    marginTop: 35,
    '@media (max-width: 600px)': {
      width: '90%'
    }
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
    marginTop: 30,
    '@media (max-width: 600px)': {
      width: '90%'
    }
  },
  albumImage: {
    width: 200,
    height: 200
  }
}));
