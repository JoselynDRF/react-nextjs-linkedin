import { FC } from 'react'
import { Avatar, Box, Typography } from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public'
import useStyles from './PostHeader.style'

type PostHeaderProps = {
  post: PostProps
}

const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  const classes = useStyles()

  return (
    <Box display="flex" alignItems="center" lineHeight="normal" mb={1}>
      <Avatar alt="Profile photo" className={classes.avatar} />
      <div>
        <Box display="flex">
          <Typography variant="subtitle2" className={classes.subtitle}>
            {post.author}
          </Typography>
          {post.degreeConnection && (
            <Typography variant="subtitle2" color="textSecondary">
              • {post.degreeConnection}
            </Typography>
          )}
        </Box>

        <Typography variant="caption" color="textSecondary">
          {post.headline}
        </Typography>

        <Box display="flex" alignItems="center">
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.subtitle}
          >
            {post.createDate} •
          </Typography>
          <PublicIcon fontSize="small" className={classes.visibilityIcon} />
        </Box>
      </div>
    </Box>
  )
}

export default PostHeader
