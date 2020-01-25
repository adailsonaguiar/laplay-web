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
  artistInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5
  },
  artistName: {
    fontSize: 30,
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: 20
    }
  },
  artistBio: {
    textAlign: 'justify'
  },
  playcount: {
    fontSize: 10,
    fontWeight: 200
  },
  albumInfo: {
    background: '#fff',
    width: 600,
    padding: 20,
    borderRadius: 6,
    marginTop: 30,
    '@media (max-width: 600px)': {
      width: '90%'
    }
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));
