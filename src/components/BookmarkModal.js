import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import Context from "../context";
import { createBookmark, getBookmarks } from "../helper";
import Loading from "./Loading";

function Modal() {
  //context
  const { bookmarks, setBookmarks } = useContext(Context);

  //using this to close modal after creating todo
  const modalRef = useRef(false);

  //states
  const [url, setUrl] = useState("");
  const [group, setGroup] = useState(-1);
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submitData = (e) => {
    console.log(group.name);
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
        setName("");
        setUrl("");
        //fetch data from localstorage and update context
        let result = getBookmarks();
        if (result.success) {
          setBookmarks(result.data);

          modalRef.current.checked = false;
        } else {
          console.log(result.error);
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);
        setName("");
        setUrl("");
        if(err.response.status===425){
          toast.error("Link seems incorrect!!");
        }else
        toast.error("Something went wrong");
      });
  };

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
            value={url}
              className="textarea w-full textarea-bordered"
              placeholder="Paste your link"
              onChange={(e) => setUrl(e.target.value)}
              required
            ></textarea>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={60}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Choose group</span>
              </label>
              <select
                className="select select-bordered" defaultValue={group}
                onChange={(e) => setGroup(e.target.value)}
              >
                {bookmarks &&
                  bookmarks.groups?.length > 0 &&
                  bookmarks?.groups.map((item, index) => {
                    if (index === 0)
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                          
                        >
                          {item.name}
                        </option>
                      );
                    else
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                  })}
              </select>
            </div>

            <button className="btn mt-5 bg-bgDarkGreen btn-wide w-full">
              {submitting ? <Loading /> : "Save"}
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
