import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const Login = () => {
	// const [userEmail, setUserEmail] = useState('');
	const { logIn, googleSignUp, githubSignUp, facebookSignUp } =
		useContext(authContext);
	const [success, setSuccess] = useState(false);
	const [passwordError, setPasswordError] = useState('');
	
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	//!......................................
	//!......................................

	//! Google Log In....
	const googleSignIn = () => {
		googleSignUp()
			.then((result) => {
				const user = result.user;
				console.log(user);
				// navigate(`${from}`);
				navigate(from, { replace: true });
			})
			.catch((error) => console.error(error));
	};
	//!......................................

	//! Github Log In....
	const githubSignIn = () => {
		githubSignUp()
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate(`${from}`);
			})
			.catch((error) => console.log(error));
	};
	//!......................................

	//! Facebook Log In.....
	const fbSignIn = () => {
		facebookSignUp()
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate(`${from}`);
			})
			.catch((error) => console.log(error));
	};
	//!......................................

	//! Form Log In...
	const submitBtn = (e) => {
		e.preventDefault();

		setSuccess(false);
		setPasswordError('');

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		logIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setSuccess(true);
				form.reset();
				// navigate(from, { replace: true });
				navigate(`${from}`);
			})
			.catch((error) => {
				console.error(error);
				setPasswordError(error.message);
			});
	};
	//!......................................

	return (
		<div className='w-11/12 mx-auto mt-5'>
			<section className='text-gray-600  body-font flex justify-center'>
				<div className='w-72 shadow-lg shadow-slate-700 p-5  rounded-lg'>
					<div className='text-center'>
						{success && (
							<span className='text-green-500 font-bold font-serif'>
								Successfully log in
							</span>
						)}
						{passwordError && (
							<span className='text-red-600 font-bold font-serif'>
								Log in failed
							</span>
						)}
					</div>
					<br />
					<h2 className='text-gray-900 text-lg text-center font-medium title-font mb-5'>
						Log in
					</h2>
					<form onSubmit={submitBtn}>
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
						<Link to='/signup'>
							<a
								href='#'
								className='text-xs hover:underline text-gray-500 mt-3'
							>
								Crteate a new account.
							</a>
						</Link>
						<br />
						<br />

						<button className='text-white w-full btn-secondary border-0 py-2 px-8 focus:outline-none rounded text-lg'>
							Log in
						</button>
					</form>
					<br />

					<div className='flex'>
						<button
							onClick={googleSignIn}
							className='btn btn-secondary btn-outline '
						>
							<FcGoogle className='text-2xl mr-3'></FcGoogle>
						</button>
						<button
							onClick={githubSignIn}
							className='btn btn-secondary btn-outline ml-5'
						>
							<BsGithub className='text-2xl mr-3'></BsGithub>
						</button>
						<button
							onClick={fbSignIn}
							className='btn btn-secondary btn-outline ml-5'
						>
							<BsFacebook className='text-2xl text-blue-600 mr-3'></BsFacebook>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
