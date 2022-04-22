/* eslint-disable import/prefer-default-export */
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const fetchPosts = () => axios.get('/posts');
