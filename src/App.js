import 'css/App.css'
import { useState } from 'react'
import SearchBox from 'components/SearchBox'
import ControlButtons from 'components/ControlButtons'
import AddNoteButton from 'components/AddNoteButton'
import ProgressionIndicator from 'components/ProgressionIndicator'
import NotesList from 'components/NotesList'
import NotesForm from 'components/NotesForm'
import Grid from '@material-ui/core/Grid'
import { useStyles } from 'styles/main'
import NotesManager from 'util/NotesManager'

function App() {
  const classes = useStyles()
  const [showNotesForm, setShowNotesForm] = useState(false)

  const onSearch = (value) => {
    console.log('Filter notes by value: ', value)
  }

  const handleEditNote = (note) => {
    console.log('handleEditNote(note)')
  }
  const handleDeleteNote = (note) => {
    console.log('handleDeleteNote(note)')
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" className="notes">
        <Grid item xs={12}>
          <SearchBox onChange={onSearch} />
        </Grid>
        <Grid item container>
          <Grid item sm={8} xs={12} container>
            <ControlButtons />
          </Grid>
          <Grid item sm={4} xs={12}>
            <AddNoteButton onClick={() => setShowNotesForm(true)} />
          </Grid>
        </Grid>
        <Grid item>
          <ProgressionIndicator progress={NotesManager.progress} />
        </Grid>
        <NotesList
          onEdit={(note) => handleEditNote(note)}
          onDelete={(note) => handleDeleteNote(note)}
        />
      </Grid>
      <NotesForm
        showNotesForm={showNotesForm}
        onHideNotesForm={() => setShowNotesForm(false)}
      />
    </div>
  )
}

export default App
