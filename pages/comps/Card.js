const Card = (props) => {
	
	return (
		<div>
			<img src={`https://robohash.org/${props.id}?size=300x300`} alt="robot"/>
			    <h2>{props.name}</h2>
				<p>{props.email}</p>
			
			<style jsx>{`
			 div {
			 	background-color:#cdecff;
			 	display:inline-block;
			 	border-radius: 0.5rem;
			 	padding:1rem;
				margin:0.5rem;
				border-width: .25rem;
			 }
	     	 div:hover, div:focus {
	      	   transform: scale( 1.05 );
	      	   transition: transform .10s ease-in;
	       	 }
	      	 div:active {
	      	 	transform: scale( .90 );
	      	 	transition: transform .25s ease-out;
	      	 }

	    `}
	 	</style>
		</div>
	);
}
export default Card;