import { FC } from 'react'
import Grid from '@material-ui/core/Grid'
import { useFetch } from '../../hooks/useFetch'
import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'

type TimelineProps = {
  initialPosts: PostProps[]
}

const Timeline: FC<TimelineProps> = ({ initialPosts }) => {
  const { data: posts } = useFetch<PostProps[]>('posts', initialPosts)

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <CreatePost posts={posts} />
      </Grid>
      {posts?.length
        ? posts.map(post => (
            <Grid key={post._id || ''} item>
              <Post post={post} />
            </Grid>
          ))
        : null}
    </Grid>
  )
}

export default Timeline
