import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import { FaFileDownload } from 'react-icons/fa';

const ref = React.createRef();
const Details = () => {
	const courseDetails = useLoaderData();
	const { id, image, name, course_fee, details } = courseDetails;
	return (
		<div className=' p-6 overflow-hidden py-10 shadow bg-gray-900 text-gray-100 mx-auto'>
			<Pdf targetRef={ref} filename='code-example.pdf'>
				{({ toPdf }) => (
					<button onClick={toPdf}>
						<FaFileDownload className='text-secondary text-2xl mx-5'></FaFileDownload>
					</button>
				)}
			</Pdf>
			<div className='mt-2' ref={ref}>
				<Link herf='/foldername/file'>
					<div className=' p-6 overflow-hidden py-10 shadow bg-gray-900 text-gray-100 mx-auto'>
						<article>
							<img className='w-72 mx-auto my-4' src={image} alt='' />
							<h2 className='text-2xl font-serif font-bold'>{name}</h2>
							<p className='mt-4 dark:text-gray-400 text-justify'>{details}</p>
							<div className='lg:flex items-center mt-8 space-x-4'>
								<div className='flex justify-between w-full'>
									<h3 className='text-lg text-secondary font-medium'>
										<span className='font-semibold font-serif text-white'>
											Course Fee :
										</span>{' '}
										{course_fee}/-
									</h3>
									<p>Course ID: {id}</p>
								</div>
								<Link to='/courses'>
									<button className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-secondary'>
										Back
									</button>
								</Link>
								<Link to={`/course/checkout/${id}`}>
									<button
										type='button'
										className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-secondary'
									>
										Get Premium
									</button>
								</Link>
							</div>
						</article>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Details;
