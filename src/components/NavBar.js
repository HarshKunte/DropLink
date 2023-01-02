import React from 'react';
import { IconContext } from 'react-icons';
import {MdAdd} from 'react-icons/md'
function NavBar() {
    return ( 
        <header className="p-4">
	<div className="container flex justify-between items-center h-12 md:h-16 mx-auto">
		<ul className="items-stretch  space-x-3 flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex text-lg sm:text-xl font-bold items-center pr-4 ">
					 DropLink</a>
			</li>
		</ul>
		
		<div className="flex items-center md:space-x-4">
			
			<label htmlFor="my-modal-3" type="button" className="cursor-pointer hidden md:flex items-center text-white px-6 py-2 font-semibold rounded bg-bgDarkGreen">
			<MdAdd color='white' className='w-5 h-5' />Add new link.</label>
		</div>
		
		<label  htmlFor="my-modal-3" type="button" className="cursor-pointer w-10 h-10 flex text-white justify-center items-center md:hidden  rounded-full bg-bgDarkGreen">
		<IconContext.Provider value={{ color: "white" }}>
			<MdAdd color='white' className='w-5 h-5' />
</IconContext.Provider>
		</label>
		
	</div>
</header>
     );
}

export default NavBar;