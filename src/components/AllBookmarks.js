import React, { useContext, useState } from "react";
import Card from "./Card";
import Context from "../context";
import Empty from "../images/empty_page.svg";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

function AllBookmarks() {
  const { bookmarks } = useContext(Context);

  const [isSearching, setIsSearching] = useState(false);
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);

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
      <SearchBar
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        filteredBookmarks={filteredBookmarks}
        setFilteredBookmarks={setFilteredBookmarks}
      />

      <motion.div layout className="flex flex-wrap py-10 justify-center lg:justify-start">
        {isSearching && filteredBookmarks.length != 0
          ? filteredBookmarks.map((data) => <Card key={data.id} item={data} />)
          : bookmarks.bookmarks?.map((data) => (
              <Card key={data.id} item={data} />
            ))}
      </motion.div>
    </div>
  );
}

export default AllBookmarks;
