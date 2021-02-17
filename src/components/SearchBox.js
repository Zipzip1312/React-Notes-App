import { fade, withStyles, makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'

const SearchInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: 'none',
    fontSize: 18,
    width: '100%',
    padding: '.7em',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    position: 'relative',
    margin: 0,
    boxShadow: '0px 3px 6px #00000029'
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
      paddingLeft: '2.5em'
    }
  }
}))

export default function SearchBox() {
  const classes = useStyles()
  return (
    <FormControl className={classes.formControl}>
      <Search className={classes.searchIcon} />
      <SearchInput
        placeholder="Search notes…"
        className={classes.searchInput}
      />
    </FormControl>
  )
}
