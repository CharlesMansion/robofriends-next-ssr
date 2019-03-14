import Link from 'next/link';
import Card from './Card';

const CardList = (props) => {
	return (
		<div>
		{props.robots.map((robot) => (
  			<Link as={`/robots/${robot.id}`} href={`/post?title=${robot.name}`}>
				<div>
					<Card id={robot.id} name={robot.name} email={robot.email}/>
				</div>
			</Link>
	  	
	  		))}
		</div>
		)
}

export default CardList