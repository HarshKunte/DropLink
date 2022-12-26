import React, { useCallback, useContext } from "react";
import { toast } from "react-hot-toast";
import { GrFormTrash } from "react-icons/gr";
import Context from "../context";
import { deleteBookmark } from "../helper";
import Placeholder from "../images/card_placeholder.svg";
function Card({ item }) {
  const { setBookmarks } = useContext(Context);

  //delete Bookmark
  function deleteItem(event) {
    event.preventDefault();
    event.stopPropagation();

    let result = deleteBookmark(item.id);
    if (result.success) setBookmarks(result.data);
    else {
      console.log(result.error);
      toast.error("Something went wrong");
    }
  }
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex bg-gradient-to-b from-bgLightGreen flex-col sm:mr-8 mb-7 w-5/6 sm:w-72 lg:w-96  py-4 px-6 space-y-3 overflow-hidden rounded-lg shadow-xl "
    >
      <div className="flex space-x-4">
        <div className="flex space-x-1 w-full items-center justify-between">
          <label className="text-md font-semibold">{item.name}</label>
          <button
            onClick={(e) => deleteItem(e)}
            type="button"
            className="w-10 h-10 flex text-white justify-center items-center  rounded-full btn-ghost"
          >
            <GrFormTrash color="bgDarkGreen" className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div>
        {item.image ? (
          <img
            src={item?.image}
            alt=""
            className="object-cover w-full h-48 mb-4 "
          />
        ) : (
          <img
            src={Placeholder}
            alt="placeholder image"
            className="object-contain w-full h-48 mb-4 "
          />
        )}
        <h2 className="mb-1 text-xs font-semibold ">{item?.title}</h2>
      </div>
    </a>
  );
}

export default Card;
