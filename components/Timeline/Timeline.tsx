import { FC } from 'react'
import Grid from '@material-ui/core/Grid'
import api from '../../server/api'
import { useFetch } from '../../hooks/useFetch'
import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'

type PostProps = {
  _id: number
  author: string
  degreeConnection: string
  headline: string
  createDate: string
  content: string
  likes: number
}

type TimelineProps = {
  initialPosts: PostProps[]
}

const Timeline: FC<TimelineProps> = ({ initialPosts }) => {
  const { data: posts, mutate } = useFetch<PostProps[]>('posts', initialPosts)

  const createPost = (newPost: PostProps) => {
    api.post('posts', newPost)
    mutate([...posts, newPost], false)
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <CreatePost onSubmit={createPost} />
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
