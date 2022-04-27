import {
  Container, AppBar, Typography, Grow, Grid,
} from '@material-ui/core';
import memories from '/images/memories.png';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Posts from './components/Posts';
import Form from './components/Form';
import useStyles from './styles';
import { getPosts } from './store/actions/posts';

export default function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const posts = getPosts();

      await posts(dispatch);
    })();
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" width={70} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId!} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
