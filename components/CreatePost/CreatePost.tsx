import { FC, useState } from 'react'
import {
  Avatar,
  Box,
  ButtonBase,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import EventIcon from '@material-ui/icons/Event'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import Card from '../Card/Card'
import CreatePostDialog from '../CreatePostDialog/CreatePostDialog'
import useStyles from './CreatePost.style'

type CreatePostProps = {
  posts: PostProps[]
}

const CreatePost: FC<CreatePostProps> = ({ posts }) => {
  const classes = useStyles()
  const [openDialog, setOpenDialog] = useState(false)

  const buttons = [
    {
      title: 'Photo',
      icon: <PhotoSizeSelectActualIcon style={{ color: '#70b6f8' }} />
    },
    {
      title: 'Video',
      icon: <YouTubeIcon style={{ color: '#7Fc15e' }} />
    },
    {
      title: 'Event',
      icon: <EventIcon style={{ color: '#e7a33e' }} />
    },
    {
      title: 'Write article',
      icon: <AssignmentIcon style={{ color: '#f5987e' }} />
    }
  ]

  return (
    <>
      <Card variant="outlined">
        <CardContent className={classes.cardContent}>
          <Box display="flex" alignItems="center" mb={1}>
            <Avatar alt="Profile photo" />
            <ButtonBase
              className={classes.createButton}
              onClick={() => setOpenDialog(true)}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ fontWeight: 500 }}
              >
                Start a post
              </Typography>
            </ButtonBase>
          </Box>
          <Grid container justify="space-between">
            {buttons.map(({ title, icon }) => (
              <Grid key={title} item>
                <ButtonBase className={classes.itemButton}>
                  {icon}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.buttonText}
                  >
                    {title}
                  </Typography>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <CreatePostDialog
        open={openDialog}
        posts={posts}
        onClose={() => setOpenDialog(false)}
      />
    </>
  )
}

export default CreatePost
