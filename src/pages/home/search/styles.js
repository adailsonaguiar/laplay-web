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
  artist: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    background: '#fff',
    width: 419,
    height: 68,
    borderRadius: 6,
    marginTop: 30,
    '@media (max-width: 600px)': {
      width: '90%'
    }
  },
  artistImage: {
    width: 50,
    height: 50
  },
  artistInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    width: '100%'
  },
  artistNameLister: {
    display: 'flex',
    flexDirection: 'column'
  },
  artistAlbums: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  artistName: {
    fontSize: 20,
    fontWeight: 500
  },
  artistListeners: {
    fontWeight: 200,
    fontSize: 12
  }
}));
