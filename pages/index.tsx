import { FC } from 'react'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { CardContent, Container, Grid, makeStyles } from '@material-ui/core'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import ProfileSummary from '../components/ProfileSummary/ProfileSummary'
import CreatePost from '../components/CreatePost/CreatePost'
import Post from '../components/Post/Post'

type PostProps = {
  id: number
  author: string
  degreeConnection: string
  headline: string
  createDate: string
  content: string
  likes: number
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
}

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(6)
  }
}))

const Home: FC<HomeProps> = ({ user, posts }) => {
  const classes = useStyles()

  return (
    <div>
      <Header></Header>
      <Container className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ProfileSummary user={user} />
          </Grid>
          <Grid item xs={5}>
            <main>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <CreatePost />
                </Grid>
                {posts.map(post => (
                  <Grid key={post.id} item>
                    <Post post={post} />
                  </Grid>
                ))}
              </Grid>
            </main>
          </Grid>
          <Grid item xs={4}>
            <aside>
              <Card variant="outlined">
                <CardContent>Widgets</CardContent>
              </Card>
            </aside>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: user } = await axios.get('http://localhost:3000/api/user')
  const { data: posts } = await axios.get('http://localhost:3000/api/posts')

  return {
    props: {
      user,
      posts
    }
  }
}

export default Home
