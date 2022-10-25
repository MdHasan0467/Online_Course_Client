import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
			<div>
				<div className='navbar bg-base-100'>
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
								<Link to='/home'>
									<li>
										<a>Home</a>
									</li>
								</Link>
								<li tabIndex={0}>
									<a className='justify-between'>Courses</a>
								</li>
								<li>
									<a>Blog</a>
								</li>
								<li className='toggle'>
									<div className='form-control'>
										<label className='label cursor-pointer'>
											<input
												type='checkbox'
												className='toggle toggle-primary'
												checked
											/>
										</label>
									</div>
								</li>
							</ul>
						</div>
						<Link to='/home' className='flex'>
							<img className='w-[50px]' src='logo.png' alt='logo' />
							<a className='btn btn-ghost normal-case text-xl'>BD Coder</a>
						</Link>
					</div>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal p-0'>
							<Link to='/home'>
								<li>
									<a>Home</a>
								</li>
							</Link>
							<li tabIndex={0}>
								<a>Courses</a>
							</li>
							<li>
								<a>Blog</a>
							</li>
							<li className='toggle'>
								<div className='form-control'>
									<label className='label cursor-pointer'>
										<input
											type='checkbox'
											className='toggle toggle-primary'
											checked
										/>
									</label>
								</div>
							</li>
						</ul>
					</div>
					<div className='navbar-end'>
						<Link to='/login'>
							<a className='btn'>Login</a>
						</Link>
					</div>
				</div>
			</div>
		);
};

export default Nav;