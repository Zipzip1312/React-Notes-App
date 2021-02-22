import FormControl from '@material-ui/core/FormControl'
import Search from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { useStyles } from 'styles/SearchInputStyle'
import { useDispatch } from 'react-redux'
import { setSearchValue } from 'redux/notesReducer'

export default function SearchBox() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const onChange = (value) => {
    dispatch(setSearchValue(value))
  }

  return (
    <FormControl className={classes.formControl}>
      <Search className={classes.searchIcon} />
      <InputBase
        placeholder="Search notes…"
        className={classes.searchInput}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  )
}
