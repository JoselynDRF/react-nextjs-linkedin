import { FC } from 'react'
import { mutate } from 'swr'
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

  const createPost = () => {
    // TEMP
    const newPost = {
      author: 'New post',
      degreeConnection: '3rd+',
      headline: 'Programmer',
      createDate: '1s',
      content: 'Lorem ipsum dolor sit amet.',
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
        <Typography>Content</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => createPost()}
          className={classes.submitButton}
        >
          Post
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreatePostDialog
