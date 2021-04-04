import { FC, useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import {
  AccountCircle,
  BusinessCenter,
  Group,
  Home,
  Notifications,
  Sms
} from '@material-ui/icons'

type NavigationProps = {
  setAnchorEl: (target: Element) => void
}

const Navigation: FC<NavigationProps> = ({ setAnchorEl }) => {
  const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Network" icon={<Group />} />
      <BottomNavigationAction label="Jobs" icon={<BusinessCenter />} />
      <BottomNavigationAction label="Messaging" icon={<Sms />} />
      <BottomNavigationAction label="Notifications" icon={<Notifications />} />
      <BottomNavigationAction
        label="Me"
        icon={<AccountCircle />}
        aria-haspopup="true"
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
      />
    </BottomNavigation>
  )
}

export default Navigation
