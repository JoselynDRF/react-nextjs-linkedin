import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(1)
  },
  subtitle: {
    marginRight: theme.spacing(0.5)
  },
  visibilityIcon: {
    width: theme.spacing(1.8),
    height: theme.spacing(1.8),
    color: theme.palette.grey[700]
  }
}))
