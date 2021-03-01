import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { useStyles } from 'styles/AddNoteButtonStyle'
import { useDispatch } from 'react-redux'
import { toggleNotesForm } from 'redux/notesReducer'

export default function AddNoteButton() {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={() => dispatch(toggleNotesForm())}
      >
        Add note
      </Button>
    </>
  )
}
