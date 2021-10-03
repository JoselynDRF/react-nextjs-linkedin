import { GetServerSideProps } from 'next'
import api from '../../utils/api'

const Profile = () => <div>Profile</div>

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: user } = await api.get('user')

  return {
    props: {
      user
    }
  }
}

export default Profile
