import React from 'react';

const Searchbox = ({searchChange}) => {
	return (
		<div className="pa2">
		<input
		type="search"
		placeholder="Search Robots..."
		onChange = {searchChange}
		/>

		<style jsx>{`
			 input {
			 	background-color:#cdecff;
			 	border-color: #19a974;
			 	display:inline-block;
			 	padding:1rem;
			 	margin:1.5rem;
			 	border-style: solid; 
			 	border-width: 1px; 
			 	font-size: 1rem;
	    `}
	 	</style>
		</div>
	)
}

export default Searchbox;