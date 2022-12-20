import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import {IoSend} from 'react-icons/io5';

function Modal() {

  //using this to close modal after creating todo
  const modalRef = useRef(false);

  return (
    <React.Fragment>
      <input type="checkbox" ref={modalRef} id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          

            <form  className="">
            <textarea className="textarea w-full textarea-bordered" placeholder="Paste your link"></textarea>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Choose group</span>
  </label>
  <select className="select select-bordered">
    <option selected>Others</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
</div>
<button className="btn mt-5 bg-bgDarkGreen btn-wide w-full">Save</button>
            </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;