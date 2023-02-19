import React, { useContext, useState } from "react";
import Card from "./Card";
import Context from "../context";
import Empty from "../images/empty_page.svg";
import {IoCloseSharp} from 'react-icons/io5'
function AllBookmarks() {
  const { bookmarks } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);

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

  if (bookmarks.bookmarks?.length === 0) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <img
          alt="no bookmarks"
          className="h-32 sm:h-40 lg:h-52 mt-16 sm:mt-10 lg:mt-20"
          src={Empty}
        />
        <p className="text-center mt-8 md:mt-16 text-base md:text-lg font-sans">
          Looks like you dont have any bookmarks yet!
        </p>
      </div>
    );
  }

  return (
    <div>
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
      <div className="flex flex-wrap py-10 justify-start">
        {isSearching && filteredBookmarks.length != 0
          ? filteredBookmarks.map((data) => <Card key={data.id} item={data} />)
          : bookmarks.bookmarks?.map((data) => (
              <Card key={data.id} item={data} />
            ))}
      </div>
    </div>
  );
}

export default AllBookmarks;
