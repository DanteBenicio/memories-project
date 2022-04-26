/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import * as api from '../../api';

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // pegar posts

    dispatch({ type: 'FETCH_ALL', payload: data }); // dispara a action FETCH_ALL e passa um payload
  } catch (error) {
    console.error(error);
  }
};
