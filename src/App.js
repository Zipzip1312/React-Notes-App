import './css/App.css';
import SearchBox from './components/SearchBox'
import ControlButtons from './components/ControlButtons'
import AddTaskButton from './components/AddTaskButton'
import ProgressionIndicator from './components/ProgressionIndicator'
import NotesList from './components/NotesList'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "5em auto 2em",
    width: "854px",
    padding: "15px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" className="notes">
        <Grid item xs={12}>
            <SearchBox />
        </Grid>
        <Grid item container>
          <Grid item sm={8} xs={12} container>
            <ControlButtons />
          </Grid>
          <Grid item sm={4} xs={12}>
            <AddTaskButton />
          </Grid>
        </Grid>
        <Grid item>
          <ProgressionIndicator />
        </Grid>
        <NotesList />
      </Grid>
    </div>
  );
}

export default App;
