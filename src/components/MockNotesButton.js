import Button from '@material-ui/core/Button'
import { useStyles } from 'styles/MockNotesButtonStyle'
import { useDispatch } from 'react-redux'
import { mockNotes } from 'redux/notesReducer'

export default function MockNotesButton() {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => dispatch(mockNotes())}
      >
        MOCK NOTES
      </Button>
    </div>
  )
}
