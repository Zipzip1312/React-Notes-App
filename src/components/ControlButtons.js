import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
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

export default function ControlButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disableElevation
      >
        <span>All</span>
        <span className={classes.indicator}>•</span>
      </Button>
      <Button className={classes.button} disableElevation>
        <span>Home</span>
        <span className={classes.indicator}>•</span>
      </Button>
      <Button className={classes.button} disableElevation>
        <span>Work</span>
        <span className={classes.indicator}>•</span>
      </Button>
      <Button className={classes.button} disableElevation>
        <span>Personal</span>
        <span className={classes.indicator}>•</span>
      </Button>
    </div>
  )
}
