import React from 'react';
import { Link } from 'react-router-dom';
import '../custom.css'
import Zoom from 'react-reveal/Zoom';
import { BsSuitHeart } from 'react-icons/bs';
import { useState } from 'react';

const Course = ({ courses }) => {
	const { name, id, image, details, course_fee } = courses;

	const [active, setActive] = useState(false);
	const [yellow, setYellow] = useState(false);
	const [blue, setBlue] = useState(false);
	const [red, setRed] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};
	const handleClickYellow = () => {
		setYellow(!active);
	};
	const handleClickBlue = () => {
		setBlue(!active);
	};
	const handleClickRed = () => {
		setRed(!active);
	};
	return (
		<div className='bg-slate-100 rounded-lg mt-4 p-5'>
			<section className='text-gray-600 body-font overflow-hidden'>
				<Zoom bottom>
					<div className='container '>
						<div className=' flex flex-wrap'>
							<img
								alt='ecommerce'
								className='lg:w-[300px] bg-black rounded-lg'
								src={image}
							/>
							<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
								<h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
									{name}
								</h1>
								<h2 className='text-sm title-font text-gray-500 tracking-widest'>
									COURSE ID: {id}
								</h2>
								<div className='flex mb-4'>
									<span className='flex items-center'>
										<svg
											fill='currentColor'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-4 h-4 text-indigo-500'
											viewBox='0 0 24 24'
										>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='currentColor'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-4 h-4 text-indigo-500'
											viewBox='0 0 24 24'
										>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='currentColor'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-4 h-4 text-indigo-500'
											viewBox='0 0 24 24'
										>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='currentColor'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-4 h-4 text-indigo-500'
											viewBox='0 0 24 24'
										>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='none'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-4 h-4 text-indigo-500'
											viewBox='0 0 24 24'
										>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<span className='text-gray-600 ml-3'>4 Reviews</span>
									</span>
								</div>
								<p className='leading-relaxed'>{details.slice(0, 50)}</p>
								<div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
									<div className='flex'>
										<span className='mr-3'></span>
										<button
											onClick={handleClickYellow}
											style={{ backgroundColor: yellow ? 'yellow' : 'white' }}
											className='border-2 border-yellow-200 rounded-full w-6 h-6 focus:outline-none'
										></button>

										<button
											onClick={handleClickBlue}
											style={{ backgroundColor: blue ? 'blue' : 'white' }}
											className='border-2 border-blue-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'
										></button>

										<button
											onClick={handleClickRed}
											style={{ backgroundColor: red ? 'red' : 'white' }}
											className='border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none'
										></button>
									</div>
								</div>
								<div className='flex justify-between'>
									<h1 className='title-font font-medium text-2xl text-gray-900'>
										Course Fee: ${course_fee}
									</h1>
									<Link to={`/course/${courses.id}`}>
										<button
											type='button'
											className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-secondary'
										>
											Details
										</button>
									</Link>
									<button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
										<BsSuitHeart
											onClick={handleClick}
											style={{ color: active ? 'blue' : 'white' }}
										></BsSuitHeart>
									</button>
								</div>
							</div>
						</div>
					</div>
				</Zoom>
			</section>
		</div>
	);
};

export default Course;
