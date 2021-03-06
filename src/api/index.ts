/* eslint-disable import/prefer-default-export */
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const fetchPosts = () => axios.get('/posts');
export const createPost = (newPost: any) => axios.post('/posts', newPost);
export const updatePost = (id: string, updatedPost: any) => axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id: string) => axios.delete(`/posts/${id}`);
export const likePost = (id: string, post: any) => axios.patch(`/posts/${id}/likePost`, post);
