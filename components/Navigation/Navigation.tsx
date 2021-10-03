import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { mainMenu } from './NavigationOptions'

type NavigationProps = {
  setAnchorEl: (target: Element) => void
}

const useStyles = makeStyles(theme => ({
  link: {
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

const Navigation: FC<NavigationProps> = ({ setAnchorEl }) => {
  const { pathname } = useRouter()
  const classes = useStyles()

  return (
    <BottomNavigation>
      {mainMenu.length &&
        mainMenu.map(({ id, title, icon, path }) => (
          <Link key={id} href={path} passHref>
            <BottomNavigationAction
              label={title}
              icon={icon}
              showLabel
              selected={pathname === path}
              className={classes.link}
            />
          </Link>
        ))}
      <BottomNavigationAction
        label="Me"
        icon={<AccountCircle />}
        showLabel
        className={classes.link}
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
      />
    </BottomNavigation>
  )
}

export default Navigation
