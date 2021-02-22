import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDialog-paper': {
      borderRadius: 4,
      boxShadow: '0 3px 6px #00000029'
    },
    '& .MuiDialog-paperWidthSm': {
      maxWidth: theme.wrapper.maxWidth,
      width: theme.wrapper.width,
      margin: '15px'
    },
    '& .MuiDialogTitle-root': {
      fontSize: '1.5em',
      fontWeight: 400,
      color: '#00000099',
      borderBottomWidth: '0.5px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  input: {
    width: '100%',
    minHeight: 44,
    padding: '.2em 1em',
    fontSize: '1.25em',
    color: '#00000099',
    background: '#F4F4F4',
    border: 'none',
    borderRadius: '4px 4px 0 0',
    marginBottom: '1.5em',
    lineHeight: '1.5',
    alignItems: 'center',
    '& .MuiInputBase-input::placeholder': {
      opacity: 0.9
    },
    '&:focus, .MuiSelect-select:focus': {
      outline: 'none',
      background: '#F4F4F4'
    },
    '&:before, &:after': {
      display: 'none'
    }
  },
  textarea: {
    resize: 'none',
    paddingTop: '1em',
    paddingBottom: '2em',
    marginBottom: 0,
    fontSize: '1.25em',
    fontFamily: 'inherit'
  },
  formActionButtons: {
    textAlign: 'right',
    '& button': {
      margin: '1em .5em 0',
      padding: '1em'
    }
  }
}))
