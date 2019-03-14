import React, {Component} from 'react';
import Title from './comps/Title';
import Layout from './comps/Layout';
import CardList from './comps/CardList';
import fetch from 'isomorphic-unfetch';
import Searchbox from './comps/Searchbox';


class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {
		searchfield: '',
		robots:[]
		}
	}

componentDidMount() {
	this.setState({robots:this.props.robots})
}

onSearchChange = (event) => {
		this.setState({ searchfield : event.target.value})

	}

render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
	return (
		<Layout>
			<Title/>
			<Searchbox searchChange = {this.onSearchChange}/>
			<CardList robots={filteredRobots}/>
		</Layout>

		)
}
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