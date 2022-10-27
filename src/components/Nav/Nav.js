import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';

const Nav = () => {
	const [show, setShow] = useState();
	const { user, logOut } = useContext(authContext);
	const ToggleData = () => {
		setShow(!show);
	};

	const handleLogOut = () => {
		logOut()
			.then(() => { })
		.catch(error => console.error(error))
	}
	return (
		<div>
			<div className='navbar shadow-lg bg-base-100'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<img className='w-[60px]' src='logo.png' alt='logo' />
							<Link to='/home'>
								<li>
									<a>Home</a>
								</li>
							</Link>
							<Link to='/courses'>
								<li>
									<a>Courses</a>
								</li>
							</Link>
							<Link to='/blog'>
								<li>
									<a>Blog</a>
								</li>
							</Link>
							<li className=''>
								<button className='bg-white' onClick={ToggleData}>
									{!show ? (
										<h1 className='bg-gray-800 px-3 py-2 rounded-full text-white'>
											{' '}
											Dark{' '}
										</h1>
									) : (
										<h1 className=' px-3 py-2 bg-red-700 rounded-full text-white'>
											Light{' '}
										</h1>
									)}
								</button>
								{show ? (
									<h1 className='text-white'> Dark </h1>
								) : (
									<h1 className='text-white'>Light </h1>
								)}
							</li>
						</ul>
					</div>
					<div className='flex'>
						<Link
							to='/home'
							className='flex px-2  cardCourse rounded-lg hover:btn-secondary'
						>
							<img
								className='w-[60px] lg:block hidden'
								src='logo.png'
								alt='logo'
							/>
							<a className=' lg:mt-5 px-3 py-2 lg:px-0 lg:py-0  lg:text-xl text-md '>
								BD Coder
							</a>
						</Link>

						<div className='lg:block hidden ml-5'>
							<button className='bg-white mt-3' onClick={ToggleData}>
								{!show ? (
									<h1 className='bg-gray-800 px-3 py-2 rounded-full text-white'>
										{' '}
										Dark{' '}
									</h1>
								) : (
									<h1 className=' px-3 py-2 bg-red-700 rounded-full text-white'>
										Light{' '}
									</h1>
								)}
							</button>
							{show ? (
								<h1 className='text-white'> Dark </h1>
							) : (
								<h1 className='text-white'>Light </h1>
							)}
						</div>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal p-0'>
						<Link to='/home'>
							<li>
								<a className='hover:text-orange-600'>Home</a>
							</li>
						</Link>
						<Link to='/courses'>
							<li>
								<a className='hover:text-orange-600'>Courses</a>
							</li>
						</Link>
						<Link to=''>
							<li>
								<a className='hover:text-orange-600'>Blog</a>
							</li>
						</Link>
					</ul>
				</div>
				<div className='navbar-end'>
					{user ? (
						<div className='dropdown dropdown-end'>
							<label
								tabIndex={0}
								className='btn btn-ghost btn-circle online avatar'
							>
								<div className='w-10 rounded-full '>
									<img src={user.photoURL} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className='shadow-xl menu menu-compact dropdown-content bg-blue-800 text-white rounded-box w-52'
							>
								<li>
									<a className='justify-between'>
										{user.displayName}
										<span className='badge'>New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a onClick={handleLogOut}>Logout</a>
								</li>
							</ul>
						</div>
					) : (
						<Link to='/login'>
							<button className='btn btn-secondary'>Login</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
