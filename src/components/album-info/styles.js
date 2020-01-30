import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 70,
    '@media (max-width: 600px)': {
      alignItems: 'center'
    }
  },
  Header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50vw',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  albumImage: {
    width: 150,
    height: 150,
    borderRadius: 5
  },
  headerAlbum: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 35,
    marginRight: 30,
    marginBottom: 5,
    '@media (max-width: 600px)': {
      alignItems: 'center'
    }
  },
  albumName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    '@media (max-width: 600px)': {
      textAlign: 'center',
      fontSize: 20
    }
  },
  headerPaper: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10
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
  summary: {
    fontSize: 14,
    textAlign: 'justify',
    marginTop: 10,
    marginBottom: 20
  },
  music: {
    marginRight: 10,
    marginBottom: 5,
    maxWidth: '100%'
  }
}));
