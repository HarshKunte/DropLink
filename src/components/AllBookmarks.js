import React, { useEffect, useState } from 'react';
import { getLinkPreview } from "link-preview-js";
import Card from './Card';
function AllBookmarks() {
    const [data, setData] = useState(null)
    useEffect(()=>{
        console.log("reached here");
        getLinkPreview("https://www.youtube.com/watch?v=dWiUrbb6Ers",
        {imagesPropertyType: "og",
        timeout: 1000}).then((data) =>{

            setData(data)
      console.log(data)
        }
);
    },[])
    return ( 
        <div>
            <Card item={data}/>
        </div>
     );
}

export default AllBookmarks;