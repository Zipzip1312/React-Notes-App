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
import { useStyles } from 'styles/NotesFormStyle'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNotesForm, createUpdateNote } from 'redux/notesReducer'
import notesCategories from 'util/NotesCategories'

export default function NotesForm() {
  const initialFormState = { title: '', description: '', category: '' }
  const classes = useStyles()
  const isOpened = useSelector((store) => store.notes.showNotesForm)
  const noteToEdit = useSelector((store) => store.notes.noteToEdit)
  const [form, setForm] = useState(initialFormState)
  const categories = Object.keys(notesCategories)
  const dispatch = useDispatch()

  useEffect(() => noteToEdit && setForm(noteToEdit), [noteToEdit])

  const handleClose = () => {
    setForm(initialFormState)
    dispatch(toggleNotesForm())
  }
  const updateForm = (key, value) => setForm({ ...form, [key]: value })
  const handleSubmit = (event) => {
    event.preventDefault()
    handleClose()
    dispatch(createUpdateNote(form))
  }

  return (
    <div>
      <Dialog
        open={isOpened}
        onClose={handleClose}
        aria-labelledby="notes-dialog-title"
        aria-describedby="notes-dialog-form"
        className={classes.root}
      >
        <DialogTitle id="notes-dialog-title" disableTypography>
          {noteToEdit ? 'Update note' : 'Add note'}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <InputBase
                  placeholder="Add title…"
                  className={classes.input}
                  value={form.title}
                  onChange={(event) => updateForm('title', event.target.value)}
                  required={true}
                />
                <TextareaAutosize
                  rows={8}
                  placeholder="Add description…"
                  value={form.description}
                  onChange={(event) =>
                    updateForm('description', event.target.value)
                  }
                  className={`${classes.input} ${classes.textarea}`}
                  required={true}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Select
                  value={form.category}
                  onChange={(event) =>
                    updateForm('category', event.target.value)
                  }
                  displayEmpty
                  className={classes.input}
                  required={true}
                >
                  <MenuItem value="" disabled>
                    Select category
                  </MenuItem>
                  {categories.map((category, index) => (
                    <MenuItem value={category} key={index}>
                      {category}
                    </MenuItem>
                  ))}
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
                <Button type="submit" color="primary" autoFocus>
                  {noteToEdit ? 'Update' : 'Add'}
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
