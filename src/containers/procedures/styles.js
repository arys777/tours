import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    marginBottom: 20,
  },
  rootInner: {
    marginTop: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    width: "100%",
  },
  button: {
    marginTop: 10,
    marginBottom: 10
  }
}));