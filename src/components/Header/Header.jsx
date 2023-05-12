import { Link } from "react-router-dom";
import './Header.css'
export const Header = () => {
	return (
		<div className="nav">
		<Link to="">Home</Link>
		<Link to="/friends">Friends</Link>
		<Link to="/about">About</Link>
		<Link to="/contact">Contact</Link>
		<Link to="/price">Price</Link>	
		</div>
	);
}


