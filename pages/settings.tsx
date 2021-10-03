import { GetServerSideProps } from 'next'
import api from '../utils/api'

const Settings = () => <div>Settings</div>

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: user } = await api.get('user')

  return {
    props: {
      user
    }
  }
}

export default Settings
