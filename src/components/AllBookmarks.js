import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card';
import Context from '../context';
function AllBookmarks() {
    const {bookmarks, setBookmarks} = useContext(Context);
    console.log(bookmarks);
    const Api = "http://api.linkpreview.net";
    const Key = "fcc717ab078cb78b8b9a838548d2b9b1"
    const [data, setData] = useState(null)
    
    return ( 
        <div className='flex flex-wrap'>
            {
                bookmarks.bookmarks?.map((data)=>(
                    <Card key={data.id} item={data}/>
                ))
            }
        </div>
     );
}

export default AllBookmarks;