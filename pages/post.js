import {withRouter} from 'next/router'
import Layout from './comps/Layout'

const Page = withRouter((props) => (
    <Layout>
       <h1>{`Hi there ! Welcome to ${props.router.query.name}'s profile!`}</h1>
       <div>
	       <img src={`https://robohash.org/${props.router.query.id}?size=300x300`} alt="robot"/>
	       <h1>{props.router.query.title}</h1>
	       <p>{props.router.query.email}</p>
	       <style jsx>{`
       	
				 div {
				 	background-color:#cdecff;
				 	border-radius: 0.5rem;
				 	display:inline-block;
				 	padding:1rem;
					margin:0.5rem;
					border-width: .25rem;
					margin: 0;
  				
  				
  				
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
    </Layout>
))

export default Page