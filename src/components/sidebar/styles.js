import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#18171D'
  },
  logo: {
    marginRight: theme.spacing(2),
    width: 33
  },
  Toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  alignRow: {
    display: 'flex',
    alignItems: 'center'
  },
  logOut: {
    color: '#FF4040',
    fontWeight: 'bold'
  }
}));
