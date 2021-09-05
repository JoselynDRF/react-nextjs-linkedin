import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  dialog: {
    borderRadius: theme.spacing(1)
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular
  },
  submitButton: {
    color: theme.palette.common.white,
    borderRadius: theme.spacing(4)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1)
  }
}))
