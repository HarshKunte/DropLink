import React, { useContext } from "react";
import Card from "./Card";
import Context from "../context";
import Empty from "../images/empty_page.svg";
function AllBookmarks() {
  const { bookmarks } = useContext(Context);

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
    <div className="flex flex-wrap py-10 justify-start">
      {bookmarks.bookmarks?.map((data) => (
        <Card key={data.id} item={data} />
      ))}
    </div>
  );
}

export default AllBookmarks;
