import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  prev: {
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24
  },
  next: {
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24
  },
  containerNext: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  containerPrev: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}));
