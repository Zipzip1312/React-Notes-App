import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { useStyles } from 'styles/addNoteBtn'

export default function AddNoteButton({ onClick }) {
  const classes = useStyles()

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={onClick}
      >
        Add note
      </Button>
    </>
  )
}
