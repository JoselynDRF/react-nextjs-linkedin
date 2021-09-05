import { FC, useContext, useState } from 'react'
import { mutate } from 'swr'
import { Descendant } from 'slate'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import api from '../../utils/api'
import { AppContext } from '../../contexts/store'
import PlainTextEditor, {
  serializeText
} from '../PlainTextEditor/PlainTextEditor'
import useStyles from './CreatePostDialog.style'

type CreatePostDialogProps = {
  open: boolean
  posts: PostProps[]
  onClose: () => void
}

const CreatePostDialog: FC<CreatePostDialogProps> = ({
  open,
  posts,
  onClose
}) => {
  const classes = useStyles()
  const { user } = useContext(AppContext)
  const [text, setText] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: '' }]
    }
  ])

  const createPost = () => {
    const newPost = {
      author: user.name,
      degreeConnection: '',
      headline: user.headline,
      createDate: '1s',
      content: serializeText(text),
      likes: 0
    }

    api.post('posts', newPost)
    mutate('posts', [...posts, newPost], false)
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.dialog }}
      fullWidth
    >
      <DialogTitle disableTypography>
        <Typography variant="h6" className={classes.title}>
          Create a post
        </Typography>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <PlainTextEditor text={text} setText={setText} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={createPost}
          className={classes.submitButton}
        >
          Post
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreatePostDialog
