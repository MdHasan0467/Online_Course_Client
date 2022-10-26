import { getAuth, sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app);
const SignUp = () => {
	const [success, setSuccess] = useState(false);
	const [passwordError, setPasswordError] = useState('');
	const { createSignUp, userprofile } = useContext(authContext);

	const submitBtn = (e) => {
		e.preventDefault();
		setSuccess(false);
		setPasswordError('');

		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photoURL = form.profile.value;
		console.log(name, photoURL, email, password);

		//! Regex for password validation...
		if (password.length < 6) {
			setPasswordError('password should be at least 6 characters');
			return;
		}
		if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
			setPasswordError('Please provide at least two uppercase');
			return;
		}

		if (!/(?=.*[!@#$&*])/.test(password)) {
			setPasswordError('Please add at least one special character');
			return;
		}
		setPasswordError('');

		createSignUp(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				
				setSuccess(true);
				form.reset();
				emailVerify();
				updateUserDetails(name, photoURL);
			})

			.catch((error) => {
				console.error(error);
				setPasswordError(error.message);
			});
		
	};

	const emailVerify = () => {
		sendEmailVerification(auth.currentUser).then(() => {
			alert('Please check your email and verify');
		});
	};

	const updateUserDetails = (name, photoURL) => {
		userprofile(name, photoURL)
			.then(() => {
				console.log('Profile Updated');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className='w-11/12 mx-auto mt-5'>
			<div className=' shadow-xl inline-block'>
				<p className='text-red-600 font-bold font-serif'>{passwordError}</p>
				{success && (
					<span className='text-green-500 font-bold font-serif'>
						Create a new account Successfully.
					</span>
				)}
			</div>
			<section className='text-gray-600  body-font flex justify-center'>
				<div className='w-72 shadow-lg shadow-slate-700 p-5  rounded-lg'>
					<h2 className='text-gray-900 text-lg text-center font-medium title-font mb-5'>
						Sign Up Now !
					</h2>
					<form onSubmit={submitBtn}>
						<div className='relative mb-4'>
							<label for='email' className='leading-7 text-sm text-gray-600'>
								Name
							</label>
							<input
								type='text'
								id='Name'
								name='name'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								required
							/>
						</div>
						<div className='relative mb-4'>
							<label for='email' className='leading-7 text-sm text-gray-600'>
								Profile
							</label>
							<input
								type='text'
								id='URL'
								name='profile'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							/>
						</div>
						<div className='relative mb-4'>
							<label for='email' className='leading-7 text-sm text-gray-600'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								required
							/>
						</div>
						<div className='relative mb-2'>
							<label for='email' className='leading-7 text-sm text-gray-600'>
								Password
							</label>
							<input
								type='password'
								id='password'
								name='password'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								required
							/>
						</div>
						<Link to='/login'>
							<a
								href='#'
								className='text-xs hover:underline text-gray-500 mt-3'
							>
								Already have an account?
							</a>
						</Link>
						<br />
						<br />
						<button className='text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
							Sign Up
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default SignUp;
