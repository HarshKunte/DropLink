import React from 'react';
function Card({item}) {
    return ( <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col max-w-xs p-6 space-y-6 overflow-hidden rounded-lg shadow-md ">
	<div className="flex space-x-4">
		<div className="flex flex-col space-y-1">
			<label  className="text-md font-semibold">{item.name}</label>
		</div>
	</div>
	<div>
		<img src={item?.image} alt="" className="object-cover w-full h-48 mb-4 " />
		<h2 className="mb-1 text-xs font-semibold ">{item?.title}</h2>
		
	</div>
	
</a> );
}

export default Card;