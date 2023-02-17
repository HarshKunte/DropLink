import React, { useContext, useEffect, useState } from "react";
import GroupCard from "../components/GroupCard";
import { MdAdd } from "react-icons/md";
import { getBookmarks } from '../helper';
import Context from "../context";
import { toast } from "react-hot-toast";
function GroupCards() {
    const { bookmarks, setBookmarks } = useContext(Context);
    const [groupData, setGroupData] = useState([]);
    useEffect(() => {
      if(!bookmarks){
          //fetch bookmarks from localstorage
          let result = getBookmarks();
          if(result.success)
          setBookmarks(result.data)
          else{
            console.log(result.error);
            toast.error("Something went wrong")
          }
      }
      let updatedData = bookmarks.groups?.map((item) => {
        let noOfBookmarks = bookmarks.bookmarks.filter(
          (bm) => bm.group === item.id
        ).length;
        return { noOfBookmarks, ...item };
      });
      setGroupData(updatedData);
    }, [bookmarks]);
    return ( 
        <div>
      <div className="p-4 w-full h-10 ">
        <label
          htmlFor="group-modal"
          type="button"
          className="btn btn-ghost btn-sm font-bold sm:float-right text-bgDarkGreen"
        >
          <MdAdd color="inherit" className="w-5 h-5" />
          Create new group
        </label>
      </div>

      <div className="flex flex-wrap mt-16 justify-evenly md:justify-start">
        {groupData?.map((group) => (
          <GroupCard key={group.id} item={group} />
        ))}
      </div>
    </div>
     );
}

export default GroupCards;