import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  cardContent: {
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(1)
  },
  infoIcon: {
    color: theme.palette.grey[700]
  },
  buttonIcon: {
    color: theme.palette.text.secondary
  },
  followButton: {
    width: theme.spacing(12),
    border: `2px solid ${theme.palette.grey[500]}`,
    borderRadius: theme.spacing(4),
    marginTop: theme.spacing(1),
    padding: theme.spacing(0.2),
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    }
  },
  viewAllButton: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.2, 1),
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    }
  }
}))
