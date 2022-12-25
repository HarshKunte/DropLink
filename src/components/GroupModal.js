import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import Context from "../context";
import { createBookmark, getBookmarks } from "../helper";
import Loading from "./Loading";


function GroupModal() {
  //context
  const {bookmarks, setBookmarks} = useContext(Context)

  //using this to close modal after creating todo
  const modalRef = useRef(false);

  //states
  const [name, setName] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const submitData = (e)=>{
    e.preventDefault()
    setSubmitting(true)
    
    
    
  }

  return (
    <React.Fragment>
      <input
        type="checkbox"
        ref={modalRef}
        id="group-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="group-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form className="" onSubmit={submitData}>
           
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter group name.</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div>
            
            <button className="btn mt-5 bg-bgDarkGreen btn-wide w-full">
              {
                submitting ? (<Loading/>) : ("Save")
              }
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GroupModal;
