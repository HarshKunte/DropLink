import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card';
function AllBookmarks() {
    const Api = "http://api.linkpreview.net";
    const Key = "fcc717ab078cb78b8b9a838548d2b9b1"
    const [data, setData] = useState(null)
    
    return ( 
        <div className='flex space-x-8'>
            <Card item={data}/>
            <Card item={data}/>
            <Card item={data}/>
        </div>
     );
}

export default AllBookmarks;