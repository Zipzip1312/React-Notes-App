import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  button: {
    color: '#fff',
    float: 'right',
    backgroundColor: theme.palette.primary.dark
  }
}))

export default function AddNoteButton() {
  const classes = useStyles()

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add note
      </Button>
    </>
  )
}
