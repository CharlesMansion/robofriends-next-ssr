import Link from 'next/link';
import Card from './Card';

const CardList = (props) => {
	return (
		<div>
		{props.robots.map((robot) => (
  			<Link as={`/robots/${robot.id}`} href={`/post?title=${robot.name}&email=${robot.email}&id=${robot.id}&name=${robot.name}`}>
				<div style={{display:'inline'}}>
					<Card id={robot.id} name={robot.name} email={robot.email}/>
				</div>
			</Link>
	  	
	  		))}
		</div>
		)
}

export default CardList