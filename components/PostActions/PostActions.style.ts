import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  divider: {
    margin: theme.spacing(1, 0)
  },
  actionIcon: {
    width: theme.spacing(1.8),
    height: theme.spacing(1.8),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.3),
    marginRight: theme.spacing(1),
    borderRadius: '50%'
  },
  itemButton: {
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.5, 1),
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    }
  },
  buttonText: {
    fontWeight: 500,
    marginLeft: theme.spacing(1)
  }
}))
