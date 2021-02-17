import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.success.main,
    color: '#fff',
    boxShadow: '0 3px 6px #00000029'
  },
  iconBtn: {
    position: 'absolute',
    top: '.4em',
    color: '#fff',
    padding: '.2em',
    opacity: '.6',
    '&.Mui-checked': {
      color: 'inherit'
    }
  },
  title: {
    fontSize: '1.2em',
    color: 'inherit',
    fontWeight: 500,
    marginLeft: '2em',
    marginRight: '4em',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer'
  },
  noteDescription: {
    height: '5.7em',
    overflow: 'hidden'
  },
  noteDate: {
    fontWeight: 500,
    opacity: '.6',
    margin: '1em 0 -.6em'
  }
}))

export default function Note({ data }) {
  const classes = useStyles()
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setChecked(!checked)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          className={classes.iconBtn}
          style={{ left: '.2em' }}
        />

        <IconButton
          aria-label="edit"
          className={classes.iconBtn}
          style={{ right: '1.8em' }}
        >
          <EditIcon />
        </IconButton>

        <IconButton
          aria-label="delete"
          className={classes.iconBtn}
          style={{ right: '.2em' }}
        >
          <DeleteIcon />
        </IconButton>

        <Typography
          className={classes.title}
          gutterBottom
          onClick={handleChange}
        >
          Meeting with Jane and John Meeting with Jane and John
        </Typography>

        <Typography
          variant="body2"
          component="p"
          className={classes.noteDescription}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita!!! Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat
        </Typography>

        <Typography
          variant="body1"
          component="div"
          className={classes.noteDate}
        >
          Jan 25, 2021
        </Typography>
      </CardContent>
    </Card>
  )
}
