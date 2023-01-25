import React, { useContext, useEffect, useState } from "react";
import GroupCard from "../components/GroupCard";
import { MdAdd } from "react-icons/md";
import Context from "../context";
function GroupCards() {
    const { bookmarks } = useContext(Context);
    const [groupData, setGroupData] = useState([]);
    useEffect(() => {
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
        {groupData.map((group) => (
          <GroupCard key={group.id} item={group} />
        ))}
      </div>
    </div>
     );
}

export default GroupCards;