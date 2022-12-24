import React, { useCallback, useContext } from 'react';
import { GrFormTrash } from 'react-icons/gr';
import Context from '../context';
import { deleteBookmark } from '../helper';
function Card({item}) {
	const { setBookmarks} = useContext(Context);

	//delete Bookmark
	function deleteItem(event){
		event.preventDefault();
		event.stopPropagation();

		let updatedBookmarks = deleteBookmark(item.id);
		setBookmarks(updatedBookmarks);
	}
    return ( <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col mr-4 w-full sm:w-[46%] lg:w-1/3 max-w-sm  p-6 space-y-6 overflow-hidden rounded-lg shadow-md ">
	<div className="flex space-x-4">
		<div className="flex space-x-1 w-full items-center justify-between">
			<label  className="text-md font-semibold">{item.name}</label>
			<button onClick={(e)=>deleteItem(e)} type="button" className="w-10 h-10 flex text-white justify-center items-center  rounded-full btn-ghost">
			<GrFormTrash color='bgDarkGreen' className='w-5 h-5' />
		</button>
		</div>
	</div>
	<div>
		<img src={item?.image} alt="" className="object-cover w-full h-48 mb-4 " />
		<h2 className="mb-1 text-xs font-semibold ">{item?.title}</h2>
	</div>
	
</a> );
}

export default Card;