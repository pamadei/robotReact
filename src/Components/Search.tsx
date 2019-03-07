import React from 'react'

const Search = ({onSearch}:any)=> {
  // const [searchInput, setSearch] = useState("");

  // const onSearch = (e:any) => {
  //   setSearch(e.target.value)
  // }

  return (
    <div className="mt4 ml4">
      <input 
      className="pa3 ba b--green bg-lightest-blue" 
      onChange={onSearch} 
      type="search"
      placeholder="Search Robot"/>
    </div>
  )
}

export default Search
