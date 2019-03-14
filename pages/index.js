import Title from './comps/Title';
import Layout from './comps/Layout';
import CardList from './comps/CardList';
import fetch from 'isomorphic-unfetch';



const Index = (props) => {
	return (
		<Layout>
			<Title/>
			<CardList robots={props.robots}/>
		</Layout>

		)
}


Index.getInitialProps = async function () {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const robots = await res.json()

	console.log(`Show data fetched. Count : ${robots.length}`)

	return {
		robots:robots
	}
}

export default Index;