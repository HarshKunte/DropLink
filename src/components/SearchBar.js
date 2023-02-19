import React, { useContext, useState } from 'react';
import Context from "../context";
import {IoCloseSharp} from 'react-icons/io5'
function SearchBar({isSearching, setIsSearching, filteredBookmarks, setFilteredBookmarks}) {
    const { bookmarks } = useContext(Context);
    const [searchQuery, setSearchQuery] = useState(null);

    const handleSearch = (event) => {
        const query = event.target.value;
        if(event.target.value == "") setIsSearching(false)
        setSearchQuery(query);
      };
      const clearSearchBar = () => {
        setIsSearching(false)
        setSearchQuery("");
      };
    
      const searchElement = () => {
        setIsSearching(true);
        const searchList = bookmarks?.bookmarks.filter((item) => {
          return (
            item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
            item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
          );
        });
        setFilteredBookmarks(searchList);
      };

    return(
        <div className="form-control mt-10 mb-4">
        <div className="input-group input-group-sm">
          <input
            type="text"
            placeholder="Search…"
            value={searchQuery}
            className="input input-bordered input-sm"
            onChange={(e) => handleSearch(e)}
          />
          {
            isSearching ? (
              <button className="btn btn-square btn-sm" onClick={clearSearchBar}>
              <IoCloseSharp/>
              </button>
            ):(

           
          <button className="btn btn-square btn-sm" onClick={searchElement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
           )
          }
        </div>
        {
            isSearching && filteredBookmarks.length == 0 && (
          <label className="label">
            <span className="label-text-alt text-red-500">No matching items found!!</span>
          </label>
            )
          }
      </div>
    )
}

export default SearchBar
