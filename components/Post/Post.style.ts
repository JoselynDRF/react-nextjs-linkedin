import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  cardContent: {
    '&:last-child': {
      paddingBottom: theme.spacing(1)
    }
  },
  actionIcon: {
    width: theme.spacing(1.8),
    height: theme.spacing(1.8),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.3),
    marginRight: theme.spacing(1),
    borderRadius: '50%'
  }
}))
