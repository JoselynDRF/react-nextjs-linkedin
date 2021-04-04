import { FC } from 'react'
import { Button, Container, makeStyles } from '@material-ui/core'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Header from '../components/Header/Header'

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default
  }
}))

type HomeProps = {
  user: {
    name: string
  }
}

const Home: FC<HomeProps> = ({ user }) => {
  const classes = useStyles()

  return (
    <div>
      <Header></Header>
      <Container className={classes.content}>
        <h1>Welcome to Linkedin {user?.name}</h1>
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
