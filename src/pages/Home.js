import React, { useContext, useEffect } from 'react';
import AllBookmarks from '../components/AllBookmarks';
import NavBar from '../components/NavBar';
import Context from '../context';
import { getBookmarks } from '../helper';
function Home() {
	const {bookmarks, setBookmarks} = useContext(Context);
	useEffect(()=>{
		//fetch bookmarks from localstorage
		let data = getBookmarks();
		console.log(data);
		setBookmarks(data)
	},[])
    return ( <div className='px-4 md:px-16 lg:px-36 text-black'>

        <NavBar/>

        <div className='mt-10'>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap w-full">
	<div  className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>All</span>
	</div>
	<div  className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg ">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Groups</span>
	</div>
	<div  className="flex flex-1 items-center flex-shrink-0 px-5 py-5 space-x-2 border-b rounded-t-lg ">
		
	</div>
	
</div>
<AllBookmarks/>
        </div>


	
    </div> );
}

export default Home;