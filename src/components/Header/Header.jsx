import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<div>
		<Link to="">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/contact">Contact</Link>
		<Link to="/price">Price</Link>	
		</div>
	);
}


