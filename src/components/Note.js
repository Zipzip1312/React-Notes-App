import { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'
import DeleteNoteButton from 'components/DeleteNoteButton'
import DateFormatter from 'util/DateFormatter'
import notesCategories from 'util/NotesCategories'
import { useStyles } from 'styles/NoteStyle'
import { useDispatch } from 'react-redux'
import { toggleNoteStatus } from 'redux/notesReducer'
import theme from 'theme'

export default function Note({ note, onEdit, onDelete }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const noteBackground = note.completed
    ? theme.palette.grey.main
    : theme.palette[notesCategories[note.category]].main
  const [completed, setCompleted] = useState(note.completed)

  const toggleStatus = () => {
    setCompleted(!completed)
    dispatch(toggleNoteStatus(note.id))
  }

  return (
    <Card className={classes.root} style={{ backgroundColor: noteBackground }}>
      <CardContent className={completed ? classes.completed : ''}>
        <Checkbox
          checked={completed}
          onChange={toggleStatus}
          className={classes.iconBtn}
          style={{ left: '.2em' }}
        />

        <IconButton
          aria-label="edit"
          className={classes.iconBtn}
          style={{ right: '1.8em' }}
          onClick={() => onEdit(note)}
        >
          <EditIcon />
        </IconButton>

        <DeleteNoteButton title={note.title} onDelete={() => onDelete(note)} />

        <Typography
          className={classes.title}
          gutterBottom
          onClick={toggleStatus}
        >
          {note.title}
        </Typography>

        <Typography
          variant="body2"
          component="p"
          className={classes.noteDescription}
        >
          {note.description}
        </Typography>

        <Typography
          variant="body1"
          component="div"
          className={classes.noteDate}
        >
          {DateFormatter(note.date)}
        </Typography>
      </CardContent>
    </Card>
  )
}
