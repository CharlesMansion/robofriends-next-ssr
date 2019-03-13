import Link from 'next/link';
import Title from './comps/Title';
import Postlink from './comps/Postlink';

const IndexAlt = () => (
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
  </div>
)

export default IndexAlt