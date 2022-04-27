import { Request, Response } from "express";
import mongoose from "mongoose";
import { PostMessage } from '../models/postMessage';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const postMessages = await postMessage.find();

    res.json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error})
  }
}
export const createPost = (req: Request, res: Response) => {
  
}