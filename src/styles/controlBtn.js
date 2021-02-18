import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(2)
    }
  },
  button: {
    minWidth: '89px',
    position: 'relative',
    fontWeight: 400,
    textTransform: 'none',
    '&.MuiButton-contained': {
      color: '#fff'
    }
  },
  indicator: {
    position: 'absolute',
    bottom: '-.4em',
    fontSize: '2em',
    lineHeight: 1,
    color: 'green'
  }
}))
