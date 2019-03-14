const RobotImage = (props) => {
	return (
	<img src={`https://robohash.org/${props.id}?size=300x300`} alt="robot"/>
	)}

export default RobotImage;