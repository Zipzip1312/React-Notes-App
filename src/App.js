import SearchBox from 'components/SearchBox'
import ControlButtonsContainer from 'components/ControlButtonsContainer'
import AddNoteButton from 'components/AddNoteButton'
import ProgressionIndicator from 'components/ProgressionIndicator'
import NotesList from 'components/NotesList'
import NotesForm from 'components/NotesForm'
import Grid from '@material-ui/core/Grid'
import { useStyles } from 'styles/AppStyle'

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" className="notes">
        <Grid item xs={12}>
          <SearchBox />
        </Grid>
        <Grid item container>
          <Grid item sm={9} xs={12} container>
            <ControlButtonsContainer />
          </Grid>
          <Grid item sm={3} xs={12}>
            <AddNoteButton />
          </Grid>
        </Grid>
        <Grid item>
          <ProgressionIndicator />
        </Grid>
        <NotesList />
      </Grid>
      <NotesForm />
    </div>
  )
}

export default App
