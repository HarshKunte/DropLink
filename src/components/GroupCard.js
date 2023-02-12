import React from 'react';
import { Link } from 'react-router-dom';
function GroupCard({item}) {
    return ( 
        <Link to={`/group/${item.name}`} state={{id:item.id, name:item.name}}  className='w-36 h-24 sm:w-40 sm:h-28 xl:w-60 xl:h-40 bg-bgDarkGreen rounded-2xl xl:rounded-3xl shadow-xl relative mr-3 mb-4 lg:mr-5'>
            <div className='w-full rounded-2xl xl:rounded-3xl h-[90%] xl:h-36 absolute bottom-0 bg-bgLightGreen p-4 lg:p-5 lg:px-6'>
                <p className='text-bgDarkGreen text-base sm:text-lg xl:text-2xl font-bold truncate'>{item.name}</p>
                <p className='text-bgDarkGreen text-xs xl:text-sm font-semibold'>{item.noOfBookmarks} bookmarks</p>
            </div>
        </Link>
     );

}

export default GroupCard;