import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[200]
  },
  searchIcon: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: theme.spacing(0, 2),
    pointerEvents: 'none'
  },
  searchField: {
    padding: theme.spacing(1, 1, 1, 6)
  }
}))
