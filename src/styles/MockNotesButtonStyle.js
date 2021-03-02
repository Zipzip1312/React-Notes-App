import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    right: '33%',
    bottom: '3%'
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      right: '13%'
    }
  }
}))
