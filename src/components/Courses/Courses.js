import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Course from '../Course/Course';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



const Courses = () => {
	const allCourses = useLoaderData();
	
	return (
		<div className='lg:grid grid-cols-4 my-12 lg:mr-20'>
			<Fade left>
				<div className='h-full lg:p-3 space-y-2 lg:w-64 w-full lg:ml-10 dark:bg-gray-900 dark:text-gray-100 col-span-1'>
					<Zoom left>
						<div className='flex items-center p-2 space-x-4'>
							<h2 className='text-2xl font-bold'>Course Category</h2>
							<span className='flex items-center space-x-1'></span>
						</div>
					</Zoom>
					<div className='divide-y divide-gray-700'>
						<ul className=' space-y-1 text-xl italic bg-slate-300 w-11/12 mx-auto rounded-lg mt-6'>
							{allCourses.map((course) => (
								<Aside key={course.id} course={course}></Aside>
							))}
						</ul>
					</div>
				</div>
			</Fade>

			<div className=' col-span-3 w-11/12 mx-auto'>
				{allCourses.map((courses) => (
					<Course key={courses.id} courses={courses}></Course>
				))}
			</div>
		</div>
	);
};

export default Courses;
