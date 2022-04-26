import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: '0.9375rem',
    margin: '1.875rem 0',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
  },
  image: {
    marginLeft: '0.9375rem',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));
