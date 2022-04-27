/* eslint-disable import/prefer-default-export */
import axios from 'axios';

<<<<<<< HEAD
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
=======
axios.defaults.baseURL = process.env.BACKEND_URL;
>>>>>>> 8235dd50cae1e3b1db6bd4f108c8d555674225b3

export const fetchPosts = () => axios.get('/posts');
export const createPost = (newPost: any) => axios.post('/posts', newPost);
export const updatePost = (id: string, updatedPost: any) => axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id: string) => axios.delete(`/posts/${id}`);
export const likePost = (id: string, post: any) => axios.patch(`/posts/${id}/likePost`, post);
