import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import useStyles from './styles';
import Post from './Post';
import { PostsProps } from '../../types/Posts';
import { IState } from '../../types/State';

export default function Posts({ setCurrentId }: PostsProps) {
  // eslint-disable-next-line max-len
  const { posts } = useSelector((state: IState) => state);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map(post => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
}
