import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  media: {
    height: 60,
    borderRadius: theme.spacing(1, 1, 0, 0)
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: '-36px auto 0',
    border: `6px solid ${theme.palette.common.white}`
  },
  cardContent: {
    '&:last-child': {
      padding: 0
    }
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  link: {
    fontWeight: 500
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(1)
  }
}))
