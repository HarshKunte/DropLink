import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import Context from '../context';
import {IoMdArrowBack} from 'react-icons/io';
function Group() {
    const data = useLocation();
    const navigate = useNavigate()
    const {bookmarks} = useContext(Context);
    const [groupBookmarks, setGroupBookmarks] = useState([])

    const goBack = () =>{
        navigate('/')
    }

    useEffect(()=>{
        let filteredBookmarks = bookmarks.bookmarks?.filter((item)=> item.group == data.state.id)
        setGroupBookmarks(filteredBookmarks);
    },[bookmarks])
    return ( <div className='px-6'>
        <button onClick={goBack} className='flex items-center hover:underline rounded-lg mb-8  mt-5'><IoMdArrowBack/> Back</button>
         <h2 className='text-3xl capitalize font-extrabold text-bgDarkGreen'>{data.state.name}</h2>
        <div className="divider my-1"></div> 
    <div className='flex flex-wrap py-10 justify-start'>
       
    {
        groupBookmarks?.map((data)=>(
            <Card key={data.id} item={data}/>
        ))
    }
</div>
</div> );
}

export default Group;