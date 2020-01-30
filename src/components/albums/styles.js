import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  artistBio: {
    textAlign: 'justify'
  },
  playcount: {
    fontSize: 10,
    fontWeight: 200
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  titleBar: {
    background: '#fff'
  },
  albumImage: {
    width: 300,
    height: 300
  }
}));
