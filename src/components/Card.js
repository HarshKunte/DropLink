import React from 'react';
function Card({item}) {
    return ( <div className="flex flex-col max-w-xs p-6 space-y-6 overflow-hidden rounded-lg shadow-md ">
	<div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-10 h-10 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
			<span className="text-xs dark:text-gray-400">4 hours ago</span>
		</div>
	</div>
	<div>
		<img src={item?.images[0]} alt="" className="object-cover w-full h-48 mb-4 " />
		<h2 className="mb-1 text-xl font-semibold">{item?.title}</h2>
		
	</div>
	
</div> );
}

export default Card;