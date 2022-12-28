import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context';
function Group() {
    const {id} = useParams();
    const {bookmarks} = useContext(Context);
    const {groupBookmarks, setGroupBookmarks} = useState([])

    useEffect(()=>{
        let filteredBookmarks = bookmarks.bookmarks?.filter((item)=> item.group == id)
        console.log(filteredBookmarks);
    },[])
    return ( <div>
        
    </div> );
}

export default Group;