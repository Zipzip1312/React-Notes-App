import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    color: '#fff',
    boxShadow: '0 3px 6px #00000029',
    overflow: 'visible'
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
  },
  completed: {
    textDecoration: 'line-through'
  },
  deleteDialog: {
    '& .MuiDialog-paper': {
      borderRadius: 0,
      boxShadow: '0 3px 6px #00000029'
    },
    '& .MuiDialog-paperWidthSm': {
      width: '100%',
      maxWidth: '350px',
      marginLeft: 0,
      marginRight: 0
    },
    '& .MuiDialogTitle-root': {
      fontSize: '1em',
      color: '#00000099'
    }
  }
})
