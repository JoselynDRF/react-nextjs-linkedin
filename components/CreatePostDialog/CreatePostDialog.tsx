import { FC, useContext, useState } from 'react'
import { mutate } from 'swr'
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Tooltip,
  Typography
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import PublicIcon from '@material-ui/icons/Public'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import DescriptionIcon from '@material-ui/icons/Description'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import CommentIcon from '@material-ui/icons/Comment'
import api from '../../utils/api'
import { AppContext } from '../../contexts/store'
import PlainTextEditor, {
  CustomElement,
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
  const [text, setText] = useState<CustomElement[]>([
    {
      type: 'paragraph',
      children: [{ text: '' }]
    }
  ])

  const buttons = [
    {
      title: 'Add a photo',
      icon: <PhotoSizeSelectActualIcon />
    },
    {
      title: 'Add a video',
      icon: <YouTubeIcon />
    },
    {
      title: 'Add a document',
      icon: <DescriptionIcon />
    },
    {
      title: "Share that you're hiring",
      icon: <BusinessCenterIcon />
    },
    {
      title: 'Celebrate an occasion',
      icon: <NewReleasesIcon />
    },
    {
      title: 'Create a poll',
      icon: <EqualizerIcon />
    },
    {
      title: 'Add to your post',
      icon: <MoreHorizIcon />
    }
  ]

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
      <Divider light />
      <DialogContent>
        <Box display="flex" alignItems="center" pt={1} pb={4}>
          <Avatar alt="Profile photo" className={classes.avatar} />
          <Box ml={2}>
            <Typography variant="subtitle1" className={classes.userName}>
              {user?.name}
            </Typography>
            <ButtonBase className={classes.followButton}>
              <PublicIcon fontSize="small" className={classes.buttonIcon} />
              <Typography variant="subtitle2" color="textSecondary">
                Anyone
              </Typography>
              <ArrowDropDownIcon
                fontSize="small"
                className={classes.buttonIcon}
              />
            </ButtonBase>
          </Box>
        </Box>
        <PlainTextEditor text={text} setText={setText} />
      </DialogContent>
      <DialogActions>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          padding={2}
          paddingBottom={2}
        >
          <Button color="primary" style={{ textTransform: 'none' }}>
            <Typography variant="subtitle1">Add hashtag</Typography>
          </Button>
          <Box
            display="flex"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex">
              {buttons.map(({ title, icon }) => (
                <Tooltip key={title} title={title} placement="top">
                  <IconButton>{icon}</IconButton>
                </Tooltip>
              ))}
              <Divider
                orientation="vertical"
                className={classes.divider}
                flexItem
                light
              />
              <Button
                startIcon={<CommentIcon />}
                className={classes.shareButton}
              >
                Anyone
              </Button>
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={createPost}
              className={classes.submitButton}
              disabled={!text[0].children[0].text}
            >
              Post
            </Button>
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default CreatePostDialog
