import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#69BCFF',
      dark: '#2196F3'
    },
    success: {
      main: '#66BB6A'
    },
    danger: {
      main: '#FF9100'
    },
    info: {
      main: '#5C6BC0'
    }
  },
  typography: {
    body1: {
      fontSize: '1.2em'
    },
    body2: {
      fontSize: '.98em'
    }
  }
})

export default theme
