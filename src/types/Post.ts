import React from 'react';

export interface IPost {
  _id: string
  title: string
  message: string
  creator: string
  tags: string[]
  selectedFile: string
  likeCount: number
  createdAt: Date
}

export interface PostProps {
  post: IPost
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>
}
