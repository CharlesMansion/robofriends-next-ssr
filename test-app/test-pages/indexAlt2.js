import Link from 'next/link';
import Title from './comps/Title';
import fetch from 'isomorphic-unfetch';
import Postlink from './comps/Postlink';


const Index = (props) => (
  <div style={{padding:'20px 10px'}}>
  <Title/>
	 <div>
 		<a style={{color:'white', backgroundColor:'grey',padding:'10px'}}>HOME</a>
	 	 <Link href="/about">
	 		 <a style={{color:'white', backgroundColor:'blue',margin:'10px',padding:'10px'}}>ABOUT</a>
	  	 </Link>
  	 </div>
	  <p style={{padding:'20px 0px'}}>Hello Next.js</p>
	  <Postlink id="Hey-Dude" title="Hey Dude"/>
	  <ul>
	  	{props.shows.map(({show}) => (
	  		<li key={show.id}>
	  			<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
	  				<a>{show.name}</a>
	  			</Link>
	  		</li>
	  		))}
	  </ul>
  </div>
)

Index.getInitialProps = async function () {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	const data = await res.json()

	console.log(`Show data fetched. Count : ${data.length}`)

	return {
		shows:data
	}
}

export default Index