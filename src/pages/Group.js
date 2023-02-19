import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Context from "../context";
import { IoMdArrowBack } from "react-icons/io";
import { GrFormTrash } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import Empty from "../images/empty_page.svg";
import { toast } from "react-hot-toast";
import { deleteGroup, editGroupTitle, getBookmarks } from "../helper";
import NavBar from "../components/NavBar";
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
    console.log(data.state.id);
    if(!data.state.id){
        goBack()
    }
    if(Object.keys(bookmarks).length ==0){
      //fetch bookmarks from localstorage
      let result = getBookmarks();
      if(result.success)
      setBookmarks(result.data)
      else{
        console.log(result.error);
        toast.error("Something went wrong")
      }
    }
    let filteredBookmarks = bookmarks.bookmarks?.filter(
      (item) => item.group == data.state.id
    );
    setGroupBookmarks(filteredBookmarks);
  }, [bookmarks, data]);

  return (
    <div className='px-4 md:px-10 lg:px-28 xl:px-32 text-black'>

        <NavBar/>
    <div className="px-4 sm:px-6">
      
      <div className="flex space-x-2 items-center mt-8">
      <button
        onClick={goBack}
        className=" "
      >
        <IoMdArrowBack className="h-5 w-5"/> 
      </button>
      <input
          ref={inputReference}
          type="text"
          defaultValue={data.state.name}
          onChange={(e)=>setGroupTitle(e.target.value)}
          className="text-xl text-3xl w-full bg-white capitalize font-extrabold bg-none text-bgDarkGreen outline-none truncate" 
          disabled={disabled}
          onBlur={editGroupName}
          maxLength={40}
        />
        
        {data.state.id !== 0 && (
          <button onClick={()=>{setDisabled(false); inputReference.current.focus()}} className="btn-ghost">
            <BiEditAlt className="w-6 h-6" />{" "}
          </button>
        )}
        {data.state.id !== 0 && (
          <button onClick={deleteGroupButton} className="btn-ghost">
            <GrFormTrash className="w-6 h-6" />{" "}
          </button>
        )}
      </div>
      <div className="divider my-1"></div>
      {!groupBookmarks || groupBookmarks?.length === 0 ?
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
    </div>
  );
}

export default Group;
