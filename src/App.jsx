import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import axios from 'axios'

import { UserContext } from './context'
import UserList from './components/UserList'

import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3004/users').then((res) => {
			setUsers(res.data)
		})
	}, [])

	// add new User render
	const addUser = newUser => {
		setUsers([...users,newUser])
	}

	// notify for Delete
	const notify = () =>
        toast.error('🗑️ User deleted successfully!', {
        position: 'bottom-right',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
    })

	// delete User req.
	const deleteUser = id => {
		axios
		.delete("http://localhost:3004/users/" + id)
		.then(res => {
			setUsers(users.filter(user => user.id !== res.data.id))
		})
		notify()
	}


	return (
		<UserContext.Provider
			value={{
				users,
				addUser,
				deleteUser
			}}
		>
			<UserList />
			<ToastContainer/>
		</UserContext.Provider>
	)
}

export default App