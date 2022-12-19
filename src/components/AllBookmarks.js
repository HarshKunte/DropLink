import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card';
function AllBookmarks() {
    const Api = "http://api.linkpreview.net";
    const Key = "fcc717ab078cb78b8b9a838548d2b9b1"
    const [data, setData] = useState(null)
    useEffect(()=>{
        axios.get(`${Api}/?key=${Key}&q=https://www.youtube.com/watch?v=dWiUrbb6Ers`)
        .then(res =>{
            console.log(res.data);
            setData(res.data)
        })
    },[])
    return ( 
        <div>
            <Card item={data}/>
        </div>
     );
}

export default AllBookmarks;