import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoSend } from "react-icons/io5";
import { createBookmark } from "../helper";

function Modal() {
  //using this to close modal after creating todo
  const modalRef = useRef(false);

  //values
  const [url, setUrl] = useState("")
  const [group, setGroup] = useState(1)
  const [name, setName] = useState("")

  const submitData = (e)=>{
    e.preventDefault()
    
    axios.get(`${process.env.REACT_APP_API_URL}/?key=${process.env.REACT_APP_API_KEY}&q=${url}`)
        .then(res =>{
            console.log(res.data);
            const {image, title} = res.data;
            //save data into local storage
            createBookmark({url, image, title, name, group})
        })
        .catch(err =>{
            console.log(err);
        })
    
    
  }

  return (
    <React.Fragment>
      <input
        type="checkbox"
        ref={modalRef}
        id="my-modal-3"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form className="" onSubmit={submitData}>
            <textarea
              className="textarea w-full textarea-bordered"
              placeholder="Paste your link"
              onChange={(e)=>setUrl(e.target.value)}
              required
            ></textarea>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Choose group</span>
              </label>
              <select className="select select-bordered" onChange={(e)=>setGroup(e.target.value)}>
                <option value={1} selected>Others</option>
                <option value={2}>Star Wars</option>
                <option value={3}>Harry Potter</option>
              </select>
            </div>
            <button className="btn mt-5 bg-bgDarkGreen btn-wide w-full">
              Save
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
