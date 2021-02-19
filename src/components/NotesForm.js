import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { useStyles } from 'styles/notesForm'

export default function NotesForm({ showNotesForm = false, onHideNotesForm }) {
  const classes = useStyles()
  const [open, setOpen] = useState(showNotesForm)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const handleClose = () => {
    setOpen(false)
    onHideNotesForm()
  }
  const handleSubmit = () => {
    console.log(title, description, category)
  }

  useEffect(() => {
    setOpen(showNotesForm)
  }, [showNotesForm])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="notes-dialog-title"
        aria-describedby="notes-dialog-form"
        className={classes.root}
      >
        <DialogTitle id="notes-dialog-title" disableTypography>
          {'Update note'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <InputBase
                placeholder="Add title…"
                className={classes.input}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <TextareaAutosize
                rows={8}
                placeholder="Add description…"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className={`${classes.input} ${classes.textarea}`}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                displayEmpty
                className={classes.input}
              >
                <MenuItem value="" disabled>
                  Select category
                </MenuItem>
                <MenuItem value={'Home'}>Home</MenuItem>
                <MenuItem value={'Work'}>Work</MenuItem>
                <MenuItem value={'Personal'}>Personal</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={3} className={classes.formActionButtons}>
            <Grid item xs={12}>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary" autoFocus>
                {'Update'}
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  )
}
