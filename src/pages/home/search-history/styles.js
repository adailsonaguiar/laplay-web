import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  Header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vw',
    '@media (max-width: 600px)': {
      flexDirection: 'column'
    }
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  containerHistory: {
    background: '#fff',
    width: 600,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 6,
    marginTop: 30,
    '@media (max-width: 600px)': {
      width: '90%'
    }
  },
  titleContent: {
    marginBottom: 30,
    fontWeight: 'bold'
  },
  history: {
    color: '#4B4B4B',
    fontSize: 14,
    marginBottom: 30
  }
}));
