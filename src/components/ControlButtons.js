import Button from '@material-ui/core/Button'
import { useStyles } from 'styles/controlBtn'

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
