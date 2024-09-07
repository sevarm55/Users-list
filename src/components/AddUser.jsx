import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import * as yup from 'yup'

import { useContext } from 'react'
import { UserContext } from '../context'

import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
	const { addUser } = useContext(UserContext)

    // yup scheme form validation
	const schema = yup
		.object()
		.shape({
			name: yup.string().required('Name is required'),
			username: yup.string().required('Surname is required'),
			age: yup
				.number()
				.required('Age is required')
				.transform((value) => (Number.isNaN(value) ? null : value)),
			login: yup
				.string()
				.email('Invalid email format')
				.required('Email is required'),
			password: yup
				.string()
				.required('Password is required')
				.min(8, 'Password must be at least 8 characters'),
		})
		.required()

    // React-hook-form
	const { register, handleSubmit, formState: { errors }, reset} = useForm({
		resolver: yupResolver(schema),
	})

    // notify
    const notify = () =>
        toast.success('User added successfully!', {
        position: 'bottom-right',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
    })
    //  add new User post Req.
	const handleAddUser = (date) => {
		axios.post('http://localhost:3004/users', date).then((res) => {
			addUser(res.data)
		})
        notify()
        reset()
	}

	return (
		<div className="addUser">
			<form className="form" onSubmit={handleSubmit(handleAddUser)}>
                {/* label 1 */}
				<label className={`label ${errors.name ? 'err' : ''}`}>
					Name
					<input
						className={errors.name ? 'errorBorder' : ''}
						type="text"
						{...register('name')}
					/>
					{errors.name && <p>{errors.name.message}</p>}
				</label>
                {/* label 2 */}
				<label className="label">
					Username
					<input
						className={errors.username ? 'errorBorder' : ''}
						type="text"
						{...register('username')}
					/>
					{errors.username && <p>{errors.username.message}</p>}
				</label>
                {/* label 3 */}
				<label className="label">
					Age
					<input
						className={errors.age ? 'errorBorder' : ''}
						type="number"
						{...register('age')}
					/>
					{errors.age && <p>{errors.age.message}</p>}
				</label>
                {/* label 4 */}
				<label className="label">
					Email
					<input
						className={errors.login ? 'errorBorder' : ''}
						type="email"
						{...register('login')}
					/>
					{errors.login && <p>{errors.login.message}</p>}
				</label>
                {/* label 5 */}
				<label className="label">
					Password
					<input
						className={errors.password ? 'errorBorder' : ''}
						type="password"
						{...register('password')}
					/>
					{errors.password && <p>{errors.password.message}</p>}
				</label>
                {/* save button */}
                <div className='saveBtn'>
					<button>Save user</button>
                </div>
			</form>  
		</div>
	)
}

export default AddUser
