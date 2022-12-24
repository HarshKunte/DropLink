import React from 'react';
function Loading() {
    return ( <div className="flex items-center justify-center space-x-2">
	<div className="w-3 h-3 rounded-full animate-pulse bg-bgLightGreen"></div>
	<div className="w-3 h-3 rounded-full animate-pulse bg-bgLightGreen"></div>
	<div className="w-3 h-3 rounded-full animate-pulse bg-bgLightGreen"></div>
</div> );
}

export default Loading;