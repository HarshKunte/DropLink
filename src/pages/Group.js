import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Context from '../context';
function Group() {
    const {id} = useParams();
    const {bookmarks} = useContext(Context);
    const [groupBookmarks, setGroupBookmarks] = useState([])

    useEffect(()=>{
        let filteredBookmarks = bookmarks.bookmarks?.filter((item)=> item.group == id)
        setGroupBookmarks(filteredBookmarks);
    },[])
    return ( <div className='flex flex-wrap py-10 justify-evenly sm:justify-evenly lg:justify-start'>
    {
        groupBookmarks?.map((data)=>(
            <Card key={data.id} item={data}/>
        ))
    }
</div> );
}

export default Group;