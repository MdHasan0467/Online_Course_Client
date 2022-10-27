import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import { FaFileDownload } from 'react-icons/fa';

const ref = React.createRef();
const Checkout = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    	const { id, image, name, course_fee, details } = courseDetails;
    return (
			<div className='bg-slate-200 w-[800px'>
				<Pdf targetRef={ref} filename='code-example.pdf'>
					{({ toPdf }) => (
						<button onClick={toPdf}>
							<FaFileDownload className='text-secondary text-2xl m-5'></FaFileDownload>
						</button>
					)}
				</Pdf>
				<div className='mt-2' ref={ref}>
					<Link herf='/foldername/file'>
						<div className='w-[400px] mx-auto mt-5 rounded-md shadow-md bg-slate-100 text-gray-600'>
							<img
								src={image}
								alt=''
								className='object-cover object-center bg-slate-400 w-full mx-auto rounded-t-md '
							/>
							<div className='flex flex-col justify-between p-6 space-y-8'>
								<div className='space-y-2'>
									<h2 className='text-3xl text-center font-semibold tracking-wide'>
										{name}
									</h2>
									<p className='dark:text-gray-100'>{details}</p>
									<br />
									<div className='flex justify-between'>
										<h1>Fee: ${course_fee}</h1>
										<h1>ID: {id}</h1>
									</div>
								</div>
								<Link>
									<button
										type='button'
										className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-secondary'
									>
										Enroll
									</button>
								</Link>
								
							</div>
						</div>
					</Link>
				</div>
			</div>
		);
};

export default Checkout;
