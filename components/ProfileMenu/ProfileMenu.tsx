import { FC, useContext } from 'react'
import Link from 'next/link'
import {
  Avatar,
  Box,
  ButtonBase,
  Divider,
  Link as MuiLink,
  Menu,
  Typography
} from '@material-ui/core'
import { AppContext } from '../../contexts/store'
import useStyles from './ProfileMenu.style'
import { profileMenu } from './ProfileMenuOptions'

type ProfileMenuProps = {
  anchorEl: Element
  setAnchorEl: (target: Element) => void
}

const ProfileMenu: FC<ProfileMenuProps> = ({ anchorEl, setAnchorEl }) => {
  const classes = useStyles()
  const { user } = useContext(AppContext)
  const handleMenuClose = () => setAnchorEl(null)

  return (
    <Menu
      id="profile-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      PaperProps={{
        style: {
          marginTop: '0.8rem',
          width: '18rem',
          padding: '10px'
        }
      }}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Box display="flex" alignItems="center">
        <Avatar alt="Profile photo" className={classes.avatar} />
        <div>
          <Typography variant="subtitle1" style={{ fontWeight: 500 }}>
            {user.name}
          </Typography>
          <Typography variant="body2">{user.headline}</Typography>
        </div>
      </Box>
      <Link href={'in/' + user.username} passHref>
        <ButtonBase className={classes.profileButton} onClick={handleMenuClose}>
          <Typography variant="subtitle2" color="primary">
            View Profile
          </Typography>
        </ButtonBase>
      </Link>
      {profileMenu.length &&
        profileMenu.map(({ id, title, options }) => (
          <div key={id}>
            <Divider className={classes.divider} />
            <Typography
              variant="subtitle1"
              style={{ fontWeight: 500 }}
              gutterBottom
            >
              {title}
            </Typography>
            {options.length &&
              options.map(({ id, title, path }) => (
                <Box key={id} display="flex" mb={1}>
                  <Link href={path} passHref>
                    <MuiLink
                      variant="body2"
                      color="textSecondary"
                      onClick={handleMenuClose}
                    >
                      {title}
                    </MuiLink>
                  </Link>
                </Box>
              ))}
          </div>
        ))}
      <Divider className={classes.divider} />
      <Link href="#" passHref>
        <MuiLink
          variant="body2"
          color="textSecondary"
          onClick={handleMenuClose}
        >
          Sign Out
        </MuiLink>
      </Link>
    </Menu>
  )
}

export default ProfileMenu
