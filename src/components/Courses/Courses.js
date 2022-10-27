import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Course from '../Course/Course';

const Courses = () => {
	const allCourses = useLoaderData();
	return (
		<div className='lg:grid grid-cols-3 my-12 mr-20'>
			<div className='h-full p-3 space-y-2 lg:w-64 w-full ml-10 dark:bg-gray-900 dark:text-gray-100 col-span-1'>
				<div className='flex items-center p-2 space-x-4'>
					<div>
						<h2 className='text-2xl font-bold'>Course Category</h2>
						<span className='flex items-center space-x-1'></span>
					</div>
				</div>
				<div className='divide-y divide-gray-700'>
					<ul className=' space-y-1 text-xl italic bg-slate-300 rounded-lg mt-6'>
						{allCourses.map((course) => (
							<Aside key={course.id} course={course}></Aside>
						))}
					</ul>
				</div>
			</div>

			<div className='lg:grid grid-cols-3 ml-16 lg:ml-0 gap-4 col-span-2'>
				{allCourses.map((courses) => (
					<Course key={courses.id} courses={courses}></Course>
				))}
			</div>
		</div>
	);
};

export default Courses;
