import {
  Card, CardActions, CardContent, CardMedia, Button, Typography,
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { PostProps } from '../../../types/Post';
import { deletePost, likePost } from '../../../store/actions/posts';

export default function Post({ post, setCurrentId }: PostProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  async function removePost() {
    const deletePostAction = deletePost(post._id);

    await deletePostAction(dispatch);
  }

  async function updateLike() {
    const updateLikePost = likePost(post._id, post);

    await updateLikePost(dispatch);
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag: string) => `#${tag} `)}
        </Typography>
      </div>

      <Typography className={classes.title} variant="h4" gutterBottom>{post.title}</Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={updateLike}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          Like
          {' '}
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={removePost}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
