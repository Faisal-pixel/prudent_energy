const SearchInputComponent = ({searchInput, onSearchChange}) => {
    return <input placeholder="Search" onChange={onSearchChange} value={searchInput} type="search" className="border rounded-md w-full border-greyDark px-2 py-0.5 focus:outline-none"/>
}

export default SearchInputComponent;