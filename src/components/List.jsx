import { useContext } from 'react'
import { UserContext } from '../context'
import UserItem from './UserItem'

const List = () => {
	const { users } = useContext(UserContext)

	return (
		<>
			{users.length > 0 ? (
				<>
					<table>
						<thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>username</th>
								<th>age</th>
								<th>login</th>
								<th>action</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, i) => (
								<UserItem key={user.id} user={user} index={i} />
							))}
						</tbody>
					</table>
				</>
			) : (
				<h1>Add First User</h1>
			)}
		</>
	)
}

export default List
