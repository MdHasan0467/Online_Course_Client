import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ courses }) => {
	const { name, id, image, details, course_fee } = courses;
	return (
		<div className='max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 w-50'>
			<img
				src={image}
				alt=''
				className=' w-[300px] rounded-t-md h-72 dark:bg-gray-500 '
			/>
			<div className='flex flex-col justify-between p-6 space-y-8'>
				<div className='space-y-2'>
					<h2 className='text-3xl font-semibold tracking-wide italic'>
						<span>Code: {id}</span> <br />
						{name}
					</h2>
					<p className='dark:text-gray-100 text-justify'>
						{details.slice(0, 50)}
					</p>
					<h2 className='text-xl text-green-700'>Course Fee: {course_fee}</h2>
				</div>

				<Link to={`/course/${courses.id}`}>
					<button
						type='button'
						className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn dark:bg-violet-400 dark:text-gray-900'
					>
						Get Premium
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Course;
