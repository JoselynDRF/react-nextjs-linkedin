import { FC } from 'react'
import { GetServerSideProps } from 'next'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Header from '../components/Header/Header'
import ProfileSummary from '../components/ProfileSummary/ProfileSummary'
import CreatePost from '../components/CreatePost/CreatePost'
import Post from '../components/Post/Post'
import FollowsWidget from '../components/FollowsWidget/FollowsWidget'
import api from '../server/api'
import { useFetch } from '../hooks/useFetch'

type PostProps = {
  _id: number
  author: string
  degreeConnection: string
  headline: string
  createDate: string
  content: string
  likes: number
}

type RecommendationProps = {
  id: number
  title: string
  headline: string
}

type HomeProps = {
  user: {
    name: string
    headline: string
    photo: string
    views: number
    connections: number
  }
  posts: PostProps[]
  recommendations: RecommendationProps[]
}

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(6)
  }
}))

const Home: FC<HomeProps> = ({
  user,
  posts: initialPosts,
  recommendations
}) => {
  const classes = useStyles()
  const { data: posts, mutate } = useFetch<PostProps[]>('posts', initialPosts)

  const createPost = (newPost: PostProps) => {
    api.post('posts', newPost)
    mutate([...posts, newPost], false)
  }

  return (
    <div>
      <Header></Header>
      <Container className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ProfileSummary user={user} />
          </Grid>
          <Grid item xs={6}>
            <main>
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
            </main>
          </Grid>
          <Grid item xs={3}>
            <aside>
              <FollowsWidget recommendations={recommendations} />
            </aside>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: user } = await api.get('user')
  const { data: posts } = await api.get('posts')
  const { data: recommendations } = await api.get('recommendations')

  return {
    props: {
      user,
      posts,
      recommendations
    }
  }
}

export default Home
