import { useState } from 'react'
import { AppBar, Avatar, Container, Toolbar } from '@material-ui/core'
import Navigation from '../Navigation/Navigation'
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import Search from '../Search/Search'
import useStyles from './Header.style'

const Header = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" elevation={0} className={classes.appBar}>
        <Container>
          <Toolbar>
            <Avatar
              alt="Logo"
              src="logotype.svg"
              variant="square"
              className={classes.logo}
            />
            <Search />
            <div className={classes.grow} />
            <Navigation setAnchorEl={setAnchorEl} />
          </Toolbar>
        </Container>
      </AppBar>
      <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  )
}

export default Header
