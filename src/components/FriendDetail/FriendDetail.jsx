import { useLoaderData, useNavigate } from "react-router-dom";

export const FriendDetail = () => {
	const friend =useLoaderData();
	const {name,username,email,phone}=friend;
	const{street,city,zipcode}=friend.address;
	const navigate=useNavigate()
	const handleBack=()=>{
		navigate(`/friends`)
	}
	return (
		<div>
			<h3>Name: {name}</h3>
			<h4>User Name : {username} </h4>
			<p>Email: {email} </p>
			<p>Phone : {phone}</p>
			<p>Location: {street},{city},{zipcode} </p>
			<button onClick={handleBack}>Back</button>
					</div>
	);
}


