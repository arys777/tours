import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
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
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 10
  }
}));