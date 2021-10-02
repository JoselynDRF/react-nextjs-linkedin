import { FC } from 'react'
import { Box, CardContent, Link, Typography } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import Card from '../Card/Card'
import PostActions from '../PostActions/PostActions'
import PostHeader from '../PostHeader/PostHeader'
import useStyles from './Post.style'

type PostComponentProps = {
  post: PostProps
}

const Post: FC<PostComponentProps> = ({ post }) => {
  const classes = useStyles()
  const paragraph = post.content.split('\n')

  return (
    <Card variant="outlined">
      <CardContent className={classes.cardContent}>
        <PostHeader post={post} />

        <Box>
          {paragraph.length
            ? paragraph.map((text, index) => (
                <Typography key={index} variant="body2" paragraph>
                  {text}
                </Typography>
              ))
            : null}
          <Box display="none" justifyContent="flex-end">
            <Link
              component="button"
              variant="body2"
              color="textSecondary"
              onClick={() => {
                console.info('See more')
              }}
            >
              ...see more
            </Link>
          </Box>
        </Box>

        <Link
          component="button"
          onClick={() => {
            console.info('Likes')
          }}
        >
          <Box display="flex" alignItems="center">
            <ThumbUpIcon className={classes.actionIcon} />
            <Typography variant="caption" color="textSecondary">
              {post.likes}
            </Typography>
          </Box>
        </Link>

        <PostActions />
      </CardContent>
    </Card>
  )
}

export default Post
