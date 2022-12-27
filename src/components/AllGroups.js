import React, { useContext, useEffect, useState } from 'react';
import GroupCard from './GroupCard';
import {MdAdd} from 'react-icons/md'
import Context from '../context';

function AllGroups() {
    const {bookmarks, setBookmarks} = useContext(Context);
    const [groupData, setGroupData] = useState([])
    useEffect(()=>{
       let updatedData = bookmarks.groups?.map((item)=>{
            let noOfBookmarks = bookmarks.bookmarks.filter((bm) => bm.group == item.id).length
            return {noOfBookmarks, ...item}
        })
       console.log(updatedData);
       setGroupData(updatedData)
    },[])

    return (
                <div>
            <div className='p-4 w-full h-10 '>
            <label htmlFor='group-modal' type="button" className="btn btn-ghost btn-sm font-bold float-right text-bgDarkGreen">
			<MdAdd color='inherit' className='w-5 h-5' />Create new group</label>
            </div>
            
        <div className='flex flex-wrap mt-16'>
        {
            groupData.map((group)=>(
            <GroupCard item={group}/>
            ))
        }
        </div>
        </div>

     );
}

export default AllGroups;