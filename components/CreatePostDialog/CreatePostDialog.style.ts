import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  dialog: {
    borderRadius: theme.spacing(1)
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  userName: {
    fontWeight: theme.typography.fontWeightMedium
  },
  submitButton: {
    color: theme.palette.common.white,
    borderRadius: theme.spacing(4)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1)
  },
  buttonIcon: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(0, 0.5)
  },
  followButton: {
    border: `2px solid ${theme.palette.grey[500]}`,
    borderRadius: theme.spacing(4),
    padding: theme.spacing(0.5),
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    }
  },
  shareButton: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(0.5, 1.5),
    textTransform: 'capitalize',
    '&:hover': {
      borderRadius: theme.spacing(4)
    }
  },
  divider: {
    margin: theme.spacing(0, 1)
  }
}))
