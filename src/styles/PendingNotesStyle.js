import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: '2em auto'
  },
  icon: {
    fontSize: '5em',
    color: theme.palette.primary.main,
    animation: `$spin 1500ms infinite linear`
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
}))
