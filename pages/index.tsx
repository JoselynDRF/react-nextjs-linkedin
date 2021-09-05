import { FC } from 'react'
import { GetServerSideProps } from 'next'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Header from '../components/Header/Header'
import ProfileSummary from '../components/ProfileSummary/ProfileSummary'
import Timeline from '../components/Timeline/Timeline'
import FollowsWidget from '../components/FollowsWidget/FollowsWidget'
import api from '../utils/api'
import { AppContext } from '../contexts/store'

type HomeProps = {
  user: UserProps
  posts: PostProps[]
  recommendations: RecommendationProps[]
}

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(6)
  }
}))

const Home: FC<HomeProps> = ({ user, posts, recommendations }) => {
  const classes = useStyles()

  return (
    <AppContext.Provider value={{ user }}>
      <Header></Header>
      <Container className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ProfileSummary />
          </Grid>
          <Grid item xs={6}>
            <main>
              <Timeline initialPosts={posts} />
            </main>
          </Grid>
          <Grid item xs={3}>
            <aside>
              <FollowsWidget recommendations={recommendations} />
            </aside>
          </Grid>
        </Grid>
      </Container>
    </AppContext.Provider>
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
