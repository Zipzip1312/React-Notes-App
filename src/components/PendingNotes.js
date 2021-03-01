import AutorenewIcon from '@material-ui/icons/Autorenew'
import { useStyles } from 'styles/PendingNotesStyle'

export default function PendingNotes() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AutorenewIcon className={classes.icon} />
    </div>
  )
}
