import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import lightBlue from '@material-ui/core/colors/lightBlue'

const theme = createMuiTheme({
  palette: {
    background: {
      default: grey[100]
    },
    primary: {
      main: lightBlue[500],
      light: lightBlue[50]
    }
  }
})

export default theme
