import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
const Details = () => {
	const courseDetails = useLoaderData();
	const { id, image, name, course_fee, details } = courseDetails;
	return (
		<div className='max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100 mx-auto'>
			<article>
				<img src={image} alt='' />
				<h2 className='text-xl font-bold'>{name}</h2>
				<p className='mt-4 dark:text-gray-400 text-justify'>{details}</p>
				<div className='flex items-center mt-8 space-x-4'>
					<div className='flex justify-between w-full'>
						<h3 className='text-sm font-medium'>Course Fee {course_fee}</h3>
						<p>Course ID: {id}</p>
					</div>
				</div>
				<Link
					to={`/course/checkout/${id}`}
					type='button'
					className='flex items-center my-4 justify-center w-full p-3 font-semibold tracking-wide rounded-md btn dark:bg-violet-400 dark:text-gray-900'
				>
					Get Premium
				</Link>
			</article>
		</div>
	);
};

export default Details;
