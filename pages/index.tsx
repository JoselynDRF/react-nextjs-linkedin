import { FC } from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'
import { GetServerSideProps } from 'next'

type HomeProps = {
  user: {
    name: string
  }
}

const Home: FC<HomeProps> = ({ user }) => {
  return (
    <div>
      <h1>Welcome to Linkedin {user?.name}</h1>
      <Button variant="contained" color="primary">
        Test
      </Button>
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
