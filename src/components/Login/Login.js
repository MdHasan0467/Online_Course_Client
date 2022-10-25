import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
			<div className='w-11/12 mx-auto mt-5'>
				<section className='text-gray-600  body-font flex justify-center'>
					<div className='w-72 shadow-lg shadow-slate-700 p-5  rounded-lg'>
						<h2 className='text-gray-900 text-lg text-center font-medium title-font mb-5'>
							Log in
						</h2>
						<div className='relative mb-4'>
							<label for='email' className='leading-7 text-sm text-gray-600'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
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
						<button className='text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
							Log in
						</button>
					</div>
				</section>
			</div>
		);
};

export default Login;