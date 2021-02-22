import Grid from '@material-ui/core/Grid'
import Note from 'components/Note'
import NoNotesIllustration from 'components/NoNotesIllustration'
import { useSelector, useDispatch } from 'react-redux'
import { editNote, deleteNote } from 'redux/notesReducer'

export default function NotesList({ onEdit, onDelete }) {
  const notes = useSelector((state) => state.notes.all)
  const searchValue = useSelector((state) => state.notes.searchValue)
  const activeCategory = useSelector((state) => state.notes.activeCategory)
  let sortedNotes = [...notes].sort((a, b) => {
    if (a.completed === b.completed) return new Date(b.date) - new Date(a.date)
    return b.completed ? -1 : 1
  })
  const dispatch = useDispatch()

  if (activeCategory !== 'All') {
    sortedNotes = sortedNotes.filter((n) => n.category === activeCategory)
  }

  if (searchValue) {
    sortedNotes = sortedNotes.filter(
      ({ title, description }) =>
        title.toLowerCase().includes(searchValue.toLowerCase()) ||
        description.toLowerCase().includes(searchValue.toLowerCase())
    )
  }

  return (
    <Grid item container spacing={2}>
      {notes.length === 0 || sortedNotes.length === 0 ? (
        <NoNotesIllustration />
      ) : (
        sortedNotes.map((note) => (
          <Grid item xs={12} sm={6} key={note.id}>
            <Note
              note={note}
              onEdit={(note) => dispatch(editNote(note.id))}
              onDelete={(note) => dispatch(deleteNote(note.id))}
            />
          </Grid>
        ))
      )}
    </Grid>
  )
}
