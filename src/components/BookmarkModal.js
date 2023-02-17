import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Context from "../context";
import { createBookmark, getBookmarks, updateBookmark } from "../helper";
import Loading from "./Loading";

function Modal() {
  //context
  const { bookmarks, setBookmarks, editingBookmark, setEditingBookmark } = useContext(Context);
  console.log(editingBookmark);
  //using this to close modal after creating todo
  const modalRef = useRef(false);

  const urlRef = useRef(editingBookmark?.url || "")
  const nameRef = useRef(editingBookmark?.name || "")

  //states
  // const [url, setUrl] = useState("");
  const [group, setGroup] = useState(-1);
  // const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submitData = (e) => {
    let name = nameRef.current.value
    let url = urlRef.current.value

    e.preventDefault();
    setSubmitting(true);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/?key=${process.env.REACT_APP_API_KEY}&q=${url}`
      )
      .then((res) => {
        console.log(res.data);
        const { image, title } = res.data;
        //save data into local storage
        createBookmark({ url, image, title, name, group });
        setSubmitting(false);
        //fetch data from localstorage and update context
        let result = getBookmarks();
        if (result.success) {
          setBookmarks(result.data);
          nameRef.current.value = ""
          urlRef.current.value = ""
          modalRef.current.checked = false;
        } else {
          console.log(result.error);
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);
        if(err.response.status===425){
          toast.error("Link seems incorrect!!");
        }else
        toast.error("Something went wrong");
      });
  };

  const updateData = (e) => {
    let name = nameRef.current.value
    let url = urlRef.current.value

    e.preventDefault();
    setSubmitting(true);
    if(editingBookmark.name === name && editingBookmark.url === url && editingBookmark.group === group){
      return
    }

    if(editingBookmark.url !== url){
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/?key=${process.env.REACT_APP_API_KEY}&q=${url}`
      )
      .then((res) => {
        console.log(res.data);
        const { image, title } = res.data;
        //save data into local storage
        updateBookmark({ url, image, title, name, group }, editingBookmark.id);
        setSubmitting(false);
        setEditingBookmark(null)
        //fetch data from localstorage and update context
        let result = getBookmarks();
        if (result.success) {
          setBookmarks(result.data);
          setEditingBookmark(null)
          modalRef.current.checked = false;
        } else {
          console.log(result.error);
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);
        
        if(err.response.status===425){
          toast.error("Link seems incorrect!!");
        }else
        toast.error("Something went wrong");
      });
    }

    else{
        updateBookmark({ url, image:editingBookmark?.image, title:editingBookmark?.title, name, group }, editingBookmark.id);
        setSubmitting(false);
        setEditingBookmark(null)
        //fetch data from localstorage and update context
        let result = getBookmarks();
        if (result.success) {
          setBookmarks(result.data);

          modalRef.current.checked = false;
        } else {
          console.log(result.error);
          toast.error("Something went wrong");
        }

    }
  };

  function clearEditingContext(){
    setEditingBookmark(null)
  }

  
  useEffect(()=>{
    nameRef.current.value = editingBookmark?.name || ""
    urlRef.current.value = editingBookmark?.url || ""
  },[editingBookmark])

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
            onClick={clearEditingContext}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form className="" >
            <textarea
            ref={urlRef}
            defaultValue={editingBookmark?.url}
              className="textarea w-full textarea-bordered"
              placeholder="Paste your link"
              // onChange={(e) => setUrl(e.target.value)}
              required
            ></textarea>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                ref={nameRef}
                defaultValue={editingBookmark?.name || nameRef.current.value}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                // onChange={(e) => setName(e.target.value)}
                required
                maxLength={60}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Choose group</span>
              </label>
              <select
                className="select select-bordered" defaultValue = {-1}
                onChange={(e) => setGroup(e.target.value)} 
              >
                {bookmarks &&
                  bookmarks.groups?.length > 0 &&
                  bookmarks?.groups.map((item, index) => {
                      return (
                        <option
                          selected={editingBookmark?.group == item.id}
                          key={item.id}
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                  })}
              </select>
              
            </div>
            {
              editingBookmark? (
                <button onClick={updateData} className="btn mt-5 bg-bgDarkGreen btn-wide w-full">
              {submitting ? <Loading /> : "Update"}
            </button>
              ):(
                <button onClick={submitData} className="btn mt-5 bg-bgDarkGreen btn-wide w-full">
              {submitting ? <Loading /> : "Save"}
            </button>
              )
            }
            
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
