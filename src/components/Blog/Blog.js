import React from 'react';

const Blog = () => {
    return (
			<div>
				<section className='text-gray-600 body-font overflow-hidden'>
					<div className='container px-5 py-24 mx-auto'>
						<div className='-my-8 divide-y-2 divide-gray-100'>
							<div className='py-8 flex flex-wrap md:flex-nowrap'>
								<div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
									<span className='font-bold text-2xl title-font text-gray-700'>
										Cybersecurity
									</span>
									<span className='mt-1 text-gray-500 text-sm'>
										12 Jun 2023
									</span>
									<img
										src='https://pimages.toolbox.com/wp-content/uploads/2022/10/17133547/cybersecurity-in-2023-1.jpg'
										className='w-[200px] mt-2'
										alt=''
									/>
								</div>
								<div className='md:flex-grow'>
									<h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
										Can I learn cyber security in 6 months?
									</h2>
									<p className='leading-relaxed'>
										A Bachelor's degree in cybersecurity will take four years to
										complete. You can follow it up with a two-year Master's
										degree. Alternatively, you can learn cybersecurity through
										online resources and courses. Doing so will take you
										anywhere from six months to a year to learn the basics and
										be ready for a workplace
									</p>
									<a className='text-indigo-500 inline-flex items-center mt-4'>
										Learn More
										<svg
											className='w-4 h-4 ml-2'
											viewBox='0 0 24 24'
											stroke='currentColor'
											stroke-width='2'
											fill='none'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path d='M5 12h14'></path>
											<path d='M12 5l7 7-7 7'></path>
										</svg>
									</a>
								</div>
							</div>
							<div className='py-8 flex flex-wrap md:flex-nowrap'>
								<div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
									<span className='font-bold text-2xl title-font text-gray-700'>
										Front-end Developer
									</span>
									<span className='mt-1 text-gray-500 text-sm'>
										12 Jun 2023
									</span>
									<img
										src='https://www.freelancermap.com/blog/wp-content/uploads/2017/08/front-end-developer-role.jpg'
										className='w-[200px] mt-2'
										alt=''
									/>
								</div>
								<div className='md:flex-grow'>
									<h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
										What is front-end developer examples?
									</h2>
									<p className='leading-relaxed'>
										Everything you see on a website, like buttons, links,
										animations, and more, were created by a front end web
										developer. It is the front end developer's job to take the
										vision and design concept from the client and implement it
										through code. Let's take a look at the freeCodeCamp home
										page.
									</p>
									<a className='text-indigo-500 inline-flex items-center mt-4'>
										Learn More
										<svg
											className='w-4 h-4 ml-2'
											viewBox='0 0 24 24'
											stroke='currentColor'
											stroke-width='2'
											fill='none'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path d='M5 12h14'></path>
											<path d='M12 5l7 7-7 7'></path>
										</svg>
									</a>
								</div>
							</div>
							<div className='py-8 flex flex-wrap md:flex-nowrap'>
								<div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
									<span className='font-bold text-2xl title-font text-gray-700'>
										Full Stack Developer
									</span>
									<span className='text-sm text-gray-500'>12 Jun 2023</span>
									<img
										src='https://cdn.ucfbootcamps.com/wp-content/uploads/sites/113/2020/05/full-stack-developer-skills.jpg'
										className='w-[200px] mt-2'
										alt=''
									/>
								</div>
								<div className='md:flex-grow'>
									<h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
										What Does a Full Stack Developer Do?
									</h2>
									<p className='leading-relaxed'>
										A Full Stack Developer is someone who works with the Back
										End — or server side — of the application as well as the
										Front End, or client side. Full Stack Developers have to
										have some skills in a wide variety of coding niches, from
										databases to graphic design and UI/UX management in order to
										do their job well. They are something of a swing, ready to
										assist wherever needed in the process.
									</p>
									<a className='text-indigo-500 inline-flex items-center mt-4'>
										Learn More
										<svg
											className='w-4 h-4 ml-2'
											viewBox='0 0 24 24'
											stroke='currentColor'
											stroke-width='2'
											fill='none'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path d='M5 12h14'></path>
											<path d='M12 5l7 7-7 7'></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
};

export default Blog;