const FETCH_ALL = 'FETCH_ALL';
const CREATE = 'CREATE';

export default (posts: IPost[] = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...posts, action.payload];

    case UPDATE:
    case LIKE:
      return posts.map(post => (post._id === action.payload._id ? action.payload : post));

    case DELETE:
      return posts.filter(post => post._id !== action.payload.id);

    default:
      return posts;
  }
};
