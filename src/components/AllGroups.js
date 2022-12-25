import React from 'react';
import GroupCard from './GroupCard';
import {MdAdd} from 'react-icons/md'

function AllGroups() {
    return ( 
        <div>
            <div className='p-4 w-full h-10 '>
            <button className="  btn btn-ghost btn-sm font-bold float-right text-bgDarkGreen">
			<MdAdd color='inherit' className='w-5 h-5' />Create new group</button>
            </div>
        <div className='flex flex-wrap mt-16'>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
        </div>
        </div>
     );
}

export default AllGroups;