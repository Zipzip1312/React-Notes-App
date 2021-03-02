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
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    button: {
      width: '45%',
      marginBottom: '1.5em',
      marginRight: 0,
      padding: '12px 8px'
    }
  }
}))
