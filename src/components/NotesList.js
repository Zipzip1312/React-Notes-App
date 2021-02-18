import Grid from '@material-ui/core/Grid'
import Note from 'components/Note'
import notesManager from 'util/NotesManager'

export default function NotesList() {
  const notes = notesManager.getNotes()

  return (
    <Grid item container spacing={2}>
      {notes.map((note) => (
        <Grid item xs={12} sm={6} key={note.id}>
          <Note note={note} />
        </Grid>
      ))}
    </Grid>
  )
}
