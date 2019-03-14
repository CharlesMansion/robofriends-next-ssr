import Link from 'next/link';
import Title from './comps/Title';
import Layout from './comps/Layout';

const About = () => (
  <div style={{padding:'20px 10px'}}>
  <Layout>
  <Title />
     <div>
	 	 <Link href="/index">
	 		 <a style={{color:'white', backgroundColor:'blue',padding:'10px'}}>HOME</a>
	  	 </Link>
	  	<a style={{color:'white', backgroundColor:'grey', margin:'10px',padding:'10px'}}>ABOUT</a>
	</div>
		  <p style={{padding:'20px 0px'}}>This is the About page.</p>
  </Layout>
  </div>
)

export default About