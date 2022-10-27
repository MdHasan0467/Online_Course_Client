import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
			<div>
				<section className='text-gray-600 body-font'>
					<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
						<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
							<h1 className='title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900'>
								Most Popular Programming Languages to Learn in 2022
							</h1>
							<p className='mb-8 leading-relaxed'>
								Copper mug try-hard pitchfork pour-over freegan heirloom neutra
								air plant cold-pressed tacos poke beard tote bag. Heirloom echo
								park mlkshk tote bag selvage hot chicken authentic tumeric
								truffaut hexagon try-hard chambray.
							</p>
							<div className='flex justify-center'>
								<Link to='/login'>
									<button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
										Enroll Now
									</button>
								</Link>
							</div>
						</div>
						<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
							<img
								className='object-cover object-center rounded'
								alt='hero'
								src='logo.png'
							/>
						</div>
					</div>
				</section>
			</div>
		);
};

export default Home;