import React, { FormEvent, useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import {
  TextField, Button, Typography, Paper,
} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../store/actions/posts';
import { FormProps } from '../../types/Form';

export default function Form({ currentId, setCurrentId }: FormProps) {
  // eslint-disable-next-line max-len
  const post = useSelector((state: any) => (currentId ? state.posts.find(post => post._id === currentId) : null));
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const {
    buttonSubmit, fileInput, form, paper, root,
  } = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  function clear() {
    setCurrentId(null);
    setPostData({
      creator: '', title: '', message: '', tags: '', selectedFile: '',
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (currentId) {
      const updatedPost = updatePost(currentId, postData);

      await updatedPost(dispatch);
    } else {
      const sendPost = createPost(postData);

      await sendPost(dispatch);
    }
  }

  return (
    <Paper className={paper}>
      <form className={`${root} ${form}`} onSubmit={handleSubmit} autoComplete="off">
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={e => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={e => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button
          className={buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
