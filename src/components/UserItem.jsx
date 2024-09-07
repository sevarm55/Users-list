import { useContext } from "react"
import { UserContext } from "../context"

const UserItem = ({ user,index }) => {

	const {deleteUser} = useContext(UserContext)
	
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{user.name}</td>
			<td>{user.username}</td>
			<td>{user.age}</td>
			<td>{user.login}</td>
			<td>
				<button onClick={() => deleteUser(user.id)}>x</button>
			</td>
		</tr>
	)
}

export default UserItem
