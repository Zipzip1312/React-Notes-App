import { useState, useEffect, useRef } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'
import DateFormatter from 'util/DateFormatter'
import notesCategories from 'util/NotesCategories'
import theme from 'theme'
import { useStyles } from 'styles/note'

export default function Note({ note, onEdit, onDelete }) {
  const classes = useStyles()
  const noteBackground = note.completed
    ? theme.palette.grey.main
    : theme.palette[notesCategories[note.category]].main
  const [completed, setCompleted] = useState(note.completed)

  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      console.log(`Note ${note.title} completed: ${completed}`)
    }
  }, [completed, note])

  const deleteHandler = (note) => {
    console.log('if user confirms delete')
    onDelete(note)
  }

  return (
    <Card className={classes.root} style={{ backgroundColor: noteBackground }}>
      <CardContent className={completed ? classes.completed : ''}>
        <Checkbox
          checked={completed}
          onChange={() => setCompleted(!completed)}
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

        <IconButton
          aria-label="delete"
          className={classes.iconBtn}
          style={{ right: '.2em' }}
          onClick={() => deleteHandler(note)}
        >
          <DeleteIcon />
        </IconButton>

        <Typography
          className={classes.title}
          gutterBottom
          onClick={() => setCompleted(!completed)}
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
