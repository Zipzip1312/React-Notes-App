import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    float: 'right',
    backgroundColor: theme.palette.primary.dark
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      width: '100%',
      padding: '12px 8px'
    }
  }
}))
