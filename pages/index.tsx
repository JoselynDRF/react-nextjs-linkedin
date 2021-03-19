import Head from 'next/head'
import { GetServerSideProps } from 'next'
import axios from 'axios'

type HomeProps = {
  user: {
    name: string
  }
}

const Home: React.FC<HomeProps> = ({ user }) => {
  return (
    <div>
      <Head>
        <title>Linkedin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Linkedin {user?.name}</h1>
      </main>
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
