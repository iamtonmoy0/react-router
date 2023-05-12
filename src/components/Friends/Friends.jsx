import { useLoaderData } from "react-router-dom";
import { Friend } from "../Friend/Friend";

export const Friends = () => {
	const data=useLoaderData();
	
	return (
		<div>
			Total friend are {data.length}
			{
				data.map(friend=><Friend key={friend.id} friend={ friend}/>)
			}
		</div>
	);
}


