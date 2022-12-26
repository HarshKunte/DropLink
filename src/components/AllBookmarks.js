import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import Context from '../context';
function AllBookmarks() {
    const {bookmarks, setBookmarks} = useContext(Context);
    console.log(bookmarks);
    
    return ( 
        <div className='flex flex-wrap py-10 justify-center sm:justify-start'>
            {
                bookmarks.bookmarks?.map((data)=>(
                    <Card key={data.id} item={data}/>
                ))
            }
        </div>
     );
}

export default AllBookmarks;