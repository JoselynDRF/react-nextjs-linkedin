import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './Search.style'

const Search = () => {
  const classes = useStyles()

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search"
        inputProps={{
          'aria-label': 'Search',
          className: classes.searchField
        }}
      />
    </div>
  )
}

export default Search
