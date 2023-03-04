import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { fadeAnimations } from '../animations';

function GroupCard({item}) {
    return (
        <Link to={`/group/${item.name}`} state={{id:item.id, name:item.name}} > 
        <motion.div
        initial={fadeAnimations.hidden}
        animate={fadeAnimations.show} 
        className='w-36 h-24 sm:w-40 sm:h-28 xl:w-60 xl:h-40 bg-bgLightGreen rounded-2xl shadow-xl relative mr-3 mb-4 lg:mr-8'>
            <div className='w-full flex flex-col justify-end rounded-2xl  h-[90%] xl:h-36 absolute bottom-0 bg-bgCardBg p-4 lg:p-5 lg:px-6'>
                <p className='text-bgDarkGreen text-base sm:text-lg xl:text-2xl font-bold truncate'>{item.name}</p>
                <p className='text-bgDarkGreen text-xs xl:text-sm font-semibold'>{item.noOfBookmarks} bookmarks</p>
            </div>
            </motion.div>
        </Link>
     );

}

export default GroupCard;