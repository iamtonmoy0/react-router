import { Link } from "react-router-dom";
import './Friend.css'
export const Friend = (friend) => {
		const {name,id,email,phone}=friend.friend;
	return (
		<div className="friendCart">
			<h3>Name:{name} </h3>
			<h4>Email : {email}</h4>
			<p>Number :{phone} </p>
			<Link to={`/friend/${id}`}>Show more</Link>
		</div>
	);
}


