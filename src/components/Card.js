import React from 'react';
function Card({item}) {
    return ( <div className="flex flex-col max-w-xs p-6 space-y-6 overflow-hidden rounded-lg shadow-md ">
	<div className="flex space-x-4">
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-md font-semibold">Item name</a>
		</div>
	</div>
	<div>
		<img src={item?.image} alt="" className="object-cover w-full h-48 mb-4 " />
		<h2 className="mb-1 text-sm ">{item?.title}</h2>
		
	</div>
	
</div> );
}

export default Card;