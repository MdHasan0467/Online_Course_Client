import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';
// import { BsMoonFill, BsSunFill } from 'react-icons/bs';

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
							
							<Link to='/blog'>
								<li>
									<a>Blog</a>
								</li>
							</Link>
							<li>
								<button  onClick={ToggleData}>
									{!show ? (
										<h1 className=' py-2 rounded-full rounded-t-none rounded-b-none'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-6 h-6 bg-slate-900 text-white rounded-full'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
												/>
											</svg>
										</h1>
									) : (
										<h1 className=' px-3 py-2 rounded-full'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-6 h-6 bg-slate-500 rounded-full'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
												/>
											</svg>
										</h1>
									)}
								</button>
								{show ? (
									<h1 className='text-white'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-6 h-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
											/>
										</svg>
									</h1>
								) : (
									<h1 className='text-white'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-6 h-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
											/>
										</svg>
									</h1>
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

						<div className='lg:block  hidden ml-5'>
							<button className='bg-white' onClick={ToggleData}>
								{!show ? (
									<h1 className='  text-white py-2 rounded-full rounded-t-none rounded-b-none'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-6 bg-slate-800 h-6 rounded-full'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
											/>
										</svg>
									</h1>
								) : (
									<h1 className=' py-2 rounded-full rounded-t-none rounded-b-none'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-6 h-6 bg-slate-400 rounded-full'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
											/>
										</svg>
									</h1>
								)}
							</button>
							{show ? (
								<h1 className='text-white'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
										/>
									</svg>
								</h1>
							) : (
								<h1 className='text-white'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
										/>
									</svg>
								</h1>
							)}
						</div>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal p-0'>
						<Link to='/home'>
							<li>
								<a className=' hover:text-secondary'>Home</a>
							</li>
						</Link>
						<Link to='/blog'>
							<li>
								<a className=' hover:text-secondary'>Blog</a>
							</li>
						</Link>
						<Link to='/faq'>
							<li>
								<a className=' hover:text-secondary'>FAQ</a>
							</li>
						</Link>
						<Link to='/contact'>
							<li>
								<a className=' hover:text-secondary'>Contact</a>
							</li>
						</Link>
					</ul>
				</div>
				<div className='navbar-end'>
					{user ?
						<div className='dropdown dropdown-end'>
							<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
								<div className='w-[50px] rounded-full'>
									<img src={user.photoURL} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
							>
								<li>
									<a className='justify-between hover:text-secondary'>
										{user.displayName}
										<span className='badge'>New</span>
									</a>
								</li>
								<li>
									<a className=' hover:text-secondary'>Settings</a>
								</li>
								<li>
									<a onClick={handleLogOut} className=' hover:text-secondary'>
										Logout
									</a>
								</li>
							</ul>
						</div>
					 : 
						<Link to='/login'>
							<button className='btn btn-secondary'>Login</button>
						</Link>
					}
				</div>
			</div>
		</div>
	);
};

export default Nav;
