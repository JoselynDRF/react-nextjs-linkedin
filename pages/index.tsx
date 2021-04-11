import { FC } from 'react'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { CardContent, Container, Grid, makeStyles } from '@material-ui/core'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import ProfileSummary from '../components/ProfileSummary/ProfileSummary'

type HomeProps = {
  user: {
    name: string
  }
}

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(6)
  }
}))

const Home: FC<HomeProps> = ({ user }) => {
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
            <Card variant="outlined">
              <CardContent>Posts</CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <CardContent>Widgets</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/user')

  return {
    props: {
      user: data
    }
  }
}

export default Home
