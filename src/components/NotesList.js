import Grid from '@material-ui/core/Grid'
import Note from 'components/Note'
import notesManager from 'util/NotesManager'

export default function NotesList() {
  const notes = notesManager.getNotes()
  const onEdit = (note) => {
    console.log(`${note.title} was edited`)
  }
  const onDelete = (note) => {
    console.log(`${note.title} was deleted`)
  }

  return (
    <Grid item container spacing={2}>
      {notes.map((note) => (
        <Grid item xs={12} sm={6} key={note.id}>
          <Note note={note} onEdit={onEdit} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  )
}
