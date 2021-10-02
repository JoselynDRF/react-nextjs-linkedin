import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(1)
  },
  profileButton: {
    width: '100%',
    margin: theme.spacing(2, 0),
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(4),
    padding: theme.spacing(0, 0.5),
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  },
  divider: {
    marginBottom: theme.spacing(1.5)
  }
}))
