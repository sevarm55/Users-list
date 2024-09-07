import AddUser from './AddUser'
import Header from './Header'
import List from './List'

const UserList = () => {
	return (
		<div>
			<Header />
			<AddUser />
			<div className='list'>
				<List />
			</div>
		</div>
	)
}

export default UserList
