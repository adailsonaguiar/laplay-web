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
    '@media (max-width: 600px)': {
      flexDirection: 'column'
    }
  },
  avatar: {
    width: '100px',
    height: '100px'
  },
  artistInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5
  },
  artistName: {
    fontSize: 30
  },
  playcount: {
    fontSize: 10,
    fontWeight: 200
  },
  albumInfo: {
    background: '#fff',
    width: 500,
    padding: 20,
    borderRadius: 6,
    marginTop: 30,
    '@media (max-width: 600px)': {
      width: '90%'
    }
  },
  searchBar: {
    padding: '2px 4px',
    display: 'flex',
    width: 268,
    borderRadius: 24,
    '@media (max-width: 600px)': {
      width: '90%'
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  gridList: {},
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));
