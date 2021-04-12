import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  cardContent: {
    '&:last-child': {
      paddingBottom: theme.spacing(1)
    }
  },
  createButton: {
    width: '100%',
    justifyContent: 'left',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(4),
    padding: theme.spacing(1.5, 2),
    marginLeft: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    }
  },
  itemButton: {
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
