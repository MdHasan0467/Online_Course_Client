import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Details = () => {
	const courseDetails = useLoaderData();
	const { id, image, name, course_fee, details } = courseDetails;
	return (
		<div className=' p-6 overflow-hidden py-10 shadow bg-gray-900 text-gray-100 mx-auto'>
			<article>
				<img className='w-72 mx-auto my-4' src={image} alt='' />
				<h2 className='text-xl font-bold'>{name}</h2>
				<p className='mt-4 dark:text-gray-400 text-justify'>{details}</p>
				<div className='flex items-center mt-8 space-x-4'>
					<div className='flex justify-between w-full'>
						<h3 className='text-lg text-red-700 font-medium'>Course Fee {course_fee}</h3>
						<p>Course ID: {id}</p>
					</div>
				</div>
				
			</article>
		</div>
	);
};

export default Details;
