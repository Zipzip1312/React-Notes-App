import { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Note from 'components/Note'
import NoNotesIllustration from 'components/NoNotesIllustration'
import PendingNotes from 'components/PendingNotes'
import { useSelector, useDispatch } from 'react-redux'
import { getNotes, editNote, deleteNote } from 'redux/notesReducer'

export default function NotesList() {
  const sortedNotes = useSelector((state) => state.notes.sorted)
  const pending = useSelector((state) => state.notes.pending)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  if (pending) return <PendingNotes />

  return (
    <Grid item container spacing={2}>
      {sortedNotes.length === 0 ? (
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
