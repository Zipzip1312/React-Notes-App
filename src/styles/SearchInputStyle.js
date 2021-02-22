import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  formControl: {
    width: '100%',
    position: 'relative',
    margin: 0,
    boxShadow: '0 3px 6px #00000029'
  },
  searchIcon: {
    color: '#000',
    opacity: '.3',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '.5em',
    zIndex: '1'
  },
  searchInput: {
    '& > input': {
      fontSize: 18,
      padding: '.7em 2.5em'
    }
  }
})
