import addNoteImage from 'images/add-note-illustration.svg'
import searchNoteImage from 'images/search-image.svg'
import MockNotesButton from 'components/MockNotesButton'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from 'styles/NoNotesIllustrationStyle'
import { useSelector } from 'react-redux'

export default function NoNotesIllustration() {
  const classes = useStyles()
  const notes = useSelector((state) => state.notes.all)
  const heading = notes.length
    ? 'Couldn’t find any notes'
    : 'You don’t have any notes'
  const illustration = notes.length ? searchNoteImage : addNoteImage

  return (
    <Grid item xs={12} className={classes.root}>
      <Typography variant="h4" className={classes.heading}>
        {heading}
      </Typography>
      <img className={classes.illustration} src={illustration} alt={heading} />
      {!notes.length && <MockNotesButton />}
    </Grid>
  )
}
