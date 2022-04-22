import { useSelector } from 'react-redux';
import useStyles from './styles';

export default function Posts() {
  const posts = useSelector((state: any) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <div>Posts</div>
  );
}
