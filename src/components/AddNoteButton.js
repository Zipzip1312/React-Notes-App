import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { useStyles } from 'styles/addNoteBtn'

export default function AddNoteButton() {
  const classes = useStyles()

  const showAddNoteForm = () => {
    console.log('Show add note form')
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={showAddNoteForm}
      >
        Add note
      </Button>
    </>
  )
}
