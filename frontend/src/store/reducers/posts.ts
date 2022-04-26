const FETCH_ALL = 'FETCH_ALL';
const CREATE = 'CREATE';

export default (posts = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return posts;

    default:
      return posts;
  }
};
