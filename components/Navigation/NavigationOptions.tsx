import {
  BusinessCenter,
  Group,
  Home,
  Notifications,
  Sms
} from '@material-ui/icons'

const mainMenu = [
  {
    id: 'feed',
    title: 'Home',
    icon: <Home />,
    path: '/feed'
  },
  {
    id: 'network',
    title: 'Network',
    icon: <Group />,
    path: '#'
  },
  {
    id: 'jobs',
    title: 'Jobs',
    icon: <BusinessCenter />,
    path: '#'
  },
  {
    id: 'messaging',
    title: 'Messaging',
    icon: <Sms />,
    path: '#'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: <Notifications />,
    path: '#'
  }
]

export { mainMenu }
