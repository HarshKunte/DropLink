import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Context from "../context";
import { IoMdArrowBack } from "react-icons/io";
import { GrFormTrash } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import Empty from "../images/empty_page.svg";
import { toast } from "react-hot-toast";
import { deleteGroup, editGroupTitle } from "../helper";
function Group() {
  const data = useLocation();
  const navigate = useNavigate();
  const inputReference = useRef()
  const [groupTitle, setGroupTitle] = useState(data.state.name);
  const [disabled, setDisabled] = useState(true);
  const { bookmarks, setBookmarks } = useContext(Context);
  const [groupBookmarks, setGroupBookmarks] = useState([]);

  const goBack = () => {
    navigate("/");
  };

  //delete Group
  function deleteGroupButton() {
    if (
      window.confirm(
        "Are you sure you want to delete this group? The bookmarks in this group will also be deleted!"
      )
    ) {
      let result = deleteGroup(data.state.id);
      if (result.success) {
        setBookmarks(result.data);
        toast.success("Group deleted");
        goBack();
      } else {
        console.log(result.error);
        toast.error("Something went wrong");
      }
    }
  }

  // edit group title
  function editGroupName() {
    if(groupTitle !== data.state.name){
      let result = editGroupTitle({id:data.state.id, name:groupTitle})
      if(result.success){
        setDisabled(true)
        setBookmarks(result.data);
        toast.success("Title updated")
      }else{
        console.log(result.error);
        toast.error("Sorry couldn't update the title !")
      }
    }
  }

  useEffect(() => {
    let filteredBookmarks = bookmarks.bookmarks?.filter(
      (item) => item.group == data.state.id
    );
    setGroupBookmarks(filteredBookmarks);
  }, [bookmarks]);

  return (
    <div className="px-4 sm:px-6">
      <button
        onClick={goBack}
        className="flex items-center hover:underline rounded-lg mb-8  mt-5"
      >
        <IoMdArrowBack /> Back
      </button>
      <div className="flex space-x-2 items-center">
      <input
          ref={inputReference}
          type="text"
          defaultValue={data.state.name}
          onChange={(e)=>setGroupTitle(e.target.value)}
          className="text-3xl flex-1 w-fit capitalize font-extrabold text-bgDarkGreen outline-none" 
          disabled={disabled}
          onBlur={editGroupName}
          maxLength={40}
        />
        
        {data.state.id != 0 && (
          <button onClick={()=>{setDisabled(false); inputReference.current.focus()}} className="btn-ghost">
            <BiEditAlt className="w-6 h-6" />{" "}
          </button>
        )}
        {data.state.id != 0 && (
          <button onClick={deleteGroupButton} className="btn-ghost">
            <GrFormTrash className="w-6 h-6" />{" "}
          </button>
        )}
      </div>
      <div className="divider my-1"></div>
      {groupBookmarks?.length === 0 ?
        (<div className="flex flex-col w-full h-full justify-center items-center">
          <img alt="no bookmarks" className="h-32 sm:h-40 lg:h-52 mt-16 sm:mt-10 lg:mt-16" src={Empty} />
          <p className="text-center mt-8 md:mt-10 text-base md:text-lg font-sans">
            Looks like you dont have any bookmarks yet!
          </p>
        </div>):(
          <div className="flex flex-wrap py-10 justify-start">
            {groupBookmarks?.map((data) => (
              <Card key={data.id} item={data} />
            ))}
          </div>
        )}
    </div>
  );
}

export default Group;
