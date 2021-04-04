import { FC } from 'react'
import { Menu, MenuItem } from '@material-ui/core'

type ProfileMenuProps = {
  anchorEl: Element
  setAnchorEl: (target: Element) => void
}

const ProfileMenu: FC<ProfileMenuProps> = ({ anchorEl, setAnchorEl }) => {
  const handleMenuClose = () => setAnchorEl(null)

  return (
    <Menu
      id="profile-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      keepMounted
    >
      <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
    </Menu>
  )
}

export default ProfileMenu
