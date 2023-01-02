import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import AllBookmarks from '../components/AllBookmarks';
import AllGroups from '../components/AllGroups';
import NavBar from '../components/NavBar';
import Context from '../context';
import { getBookmarks } from '../helper';
function Home() {
	const {bookmarks, setBookmarks} = useContext(Context);
	const [activeTab, setActiveTab] = useState(0);
	useEffect(()=>{
		//fetch bookmarks from localstorage
		let result = getBookmarks();
		if(result.success)
		setBookmarks(result.data)
		else{
			console.log(result.error);
			toast.error("Something went wrong")
		}
			
	},[])

	const changeActiveTab = (id)=>{
		setActiveTab(id)
	}
    return ( <div className='px-4 md:px-10 lg:px-28 xl:px-32 text-black'>

        <NavBar/>

		<div className='flex flex-col mt-4 sm:mt-0 items-center justify-center text-center'>
			<p className='sm:text-lg font-bold text-bgDarkGreen'>Welcome to DropLink !!!</p>
			<p className='text-sm'>Add any link here to save and view it later.</p>
		</div>

        <div className='mt-10'>
        <div className="flex items-center  overflow-x-auto overflow-y-hidden flex-nowrap w-full">
	<div onClick={()=>changeActiveTab(0)}  className={activeTab==0? `cursor-pointer flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg` : `cursor-pointer flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>All</span>
	</div>
	<div onClick={()=>changeActiveTab(1)} className={activeTab==1? `cursor-pointer flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg` : `cursor-pointer flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Groups</span>
	</div>
	<div  className="flex flex-1 items-center flex-shrink-0 px-5 py-6 space-x-2 border-b rounded-t-lg ">
		
	</div>
	
</div>
		{
			activeTab==0 &&  <AllBookmarks/>
		}
		{
			activeTab==1 &&  <AllGroups/>
		}
        </div>


	
    </div> );
}

export default Home;