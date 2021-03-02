import { useState } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { useStyles } from 'styles/NoteStyle'

export default function DeleteNoteButton({ title, onDelete }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClickClose = () => setOpen(false)
  const handleDelete = () => {
    handleClickClose()
    onDelete()
  }

  return (
    <>
      <ClickAwayListener onClickAway={handleClickClose}>
        <div>
          <IconButton
            aria-label="delete"
            className={classes.iconBtn}
            style={{ right: '.2em' }}
            onClick={handleClickOpen}
            type="button"
          >
            <DeleteIcon />
          </IconButton>

          <Dialog
            open={open}
            onClose={handleClickClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.deleteDialog}
          >
            <DialogTitle id="alert-dialog-title" disableTypography>
              Delete note?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {title}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDelete} color="primary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </ClickAwayListener>
    </>
  )
}
