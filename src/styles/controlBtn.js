import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(2)
    }
  },
  button: {
    '&.MuiButton-containedPrimary': {
      color: '#fff'
    },
    '&:not(.MuiButton-containedPrimary)': {
      opacity: '.5',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    minWidth: '89px',
    position: 'relative',
    fontWeight: 400,
    textTransform: 'none'
  },
  indicator: {
    position: 'absolute',
    bottom: '-.4em',
    fontSize: '2em',
    lineHeight: 1,
    color: 'green'
  }
}))
