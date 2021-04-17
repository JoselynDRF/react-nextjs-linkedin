import { ButtonBase, Divider, Grid, Typography } from '@material-ui/core'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined'
import SendIcon from '@material-ui/icons/Send'
import ShareIcon from '@material-ui/icons/Share'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import useStyles from './PostActions.style'

const PostActions = () => {
  const classes = useStyles()

  const actions = [
    {
      title: 'Like',
      icon: <ThumbUpOutlinedIcon />
    },
    {
      title: 'Comment',
      icon: <CommentOutlinedIcon />
    },
    {
      title: 'Share',
      icon: <ShareIcon />
    },
    {
      title: 'Send',
      icon: <SendIcon />
    }
  ]

  return (
    <>
      <Divider className={classes.divider} />

      <Grid container>
        {actions.map(({ title, icon }) => (
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
    </>
  )
}

export default PostActions
