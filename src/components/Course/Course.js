import React from 'react';
import './Course.css'

const Course = ({ courses }) => {
	const { name, picture, details, course_fee } = courses;
	return (
		<div className='card  m-5 cardCourse lg:card-side bg-base-100 hover:shadow-xl'>
			<figure>
				<img
					className='lg:w-[300px] w-full h-[220px] lg:h-full'
					src={picture}
					alt='Album'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title text-gray-800 text-xl font-bold'>
					{name}
				</h2>
				<p>{details.slice(0, 200)}</p>
				<h2 className='text-blue-800 text-xl font-semibold'>
					course fee: {course_fee} /-
				</h2>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Get Premium</button>
				</div>
			</div>
		</div>
	);
};

export default Course;


