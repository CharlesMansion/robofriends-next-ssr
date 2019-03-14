const layoutStyle = {
	fontFamily : 'Arial',
	textAlign : 'center',
	background : 'linear-gradient(to right, rgb(197, 106, 70), rgb(53, 132, 222))',
	height:'100vh',
	padding:'100px'
}

const Layout = (props) => ( <div style={layoutStyle}> {props.children} </div>)

export default Layout;