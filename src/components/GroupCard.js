import React from 'react';
function GroupCard() {
    return ( 
        <div className='w-60 h-40 bg-bgDarkGreen rounded-3xl shadow-xl relative mr-5'>
            <div className='w-full rounded-3xl h-36 absolute bottom-0 bg-bgLightGreen p-5'>
                <p className='text-bgDarkGreen text-2xl font-bold'>Group title</p>
                <p className='text-bgDarkGreen text-sm font-semibold'>25 bookmarks</p>
            </div>
        </div>
     );

}

export default GroupCard;