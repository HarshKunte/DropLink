import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import Context from '../context';
import {IoMdArrowBack} from 'react-icons/io';
import { GrFormTrash } from "react-icons/gr";
import { toast } from 'react-hot-toast';
import { deleteGroup } from '../helper';
function Group() {
    const data = useLocation();
    const navigate = useNavigate()
    const {bookmarks, setBookmarks} = useContext(Context);
    const [groupBookmarks, setGroupBookmarks] = useState([])

    const goBack = () =>{
        navigate('/')
    }

    //delete Group
    function deleteGroupButton() {
        if(window.confirm("Are you sure you want to delete this group? The bookmarks in this group will also be deleted!")){
            let result = deleteGroup(data.state.id);
            if (result.success) {
                setBookmarks(result.data);
                goBack()
            }
            else {
            console.log(result.error);
            toast.error("Something went wrong");
            }                   
        }
    }

    useEffect(()=>{
        let filteredBookmarks = bookmarks.bookmarks?.filter((item)=> item.group == data.state.id)
        setGroupBookmarks(filteredBookmarks);
    },[bookmarks])
    return ( <div className='px-6'>
        <button onClick={goBack} className='flex items-center hover:underline rounded-lg mb-8  mt-5'><IoMdArrowBack/> Back</button>
        <div className='flex space-x-2 items-center'>
         <h2 className='text-3xl capitalize font-extrabold text-bgDarkGreen'>{data.state.name}</h2>
         {
            data.state.id != 0 && (
                <button onClick={deleteGroupButton} className='btn-ghost'> <GrFormTrash className='w-6 h-6'/> </button>
            )
         }
        
        </div>
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