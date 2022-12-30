import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Context from '../context';
import {IoMdArrowBack} from 'react-icons/io';
function Group() {
    const {id} = useParams();
    const {bookmarks} = useContext(Context);
    const [groupBookmarks, setGroupBookmarks] = useState([])
    const [group, setGroup] = useState(null)

    useEffect(()=>{
        let filteredBookmarks = bookmarks.bookmarks?.filter((item)=> item.group == id)
        let group = bookmarks.groups?.find(gr => gr.id==id);
        setGroupBookmarks(filteredBookmarks);
        setGroup(group)
    },[])
    return ( <div className='px-6'>
        <button className='flex items-center hover:underline rounded-lg mb-8  mt-5'><IoMdArrowBack/> Back</button>
         <h2 className='text-3xl capitalize font-extrabold text-bgDarkGreen'>{group?.name}</h2>
        <div class="divider my-1"></div> 
    <div className='flex flex-wrap py-10 justify-evenly sm:justify-evenly  lg:justify-start'>
       
    {
        groupBookmarks?.map((data)=>(
            <Card key={data.id} item={data}/>
        ))
    }
</div>
</div> );
}

export default Group;