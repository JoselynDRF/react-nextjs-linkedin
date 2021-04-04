import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  logo: {
    marginRight: theme.spacing(1)
  }
}))
