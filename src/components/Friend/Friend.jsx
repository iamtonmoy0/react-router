import {  useNavigate } from "react-router-dom";
import './Friend.css'
export const Friend = (friend) => {
		const {name,id,email,phone}=friend.friend;
		const navigate = useNavigate()
		const handleNavigation=()=>{
			navigate(`/friend/${id}`)
		}
	return (
		<div className="friendCart">
			<h3>Name:{name} </h3>
			<h4>Email : {email}</h4>
			<p>Number :{phone} </p>
			<button onClick={handleNavigation}>Show more</button>
		</div>
	);
}


