import React from 'react';

const FAQ = () => {
    return (
			<div>
				<section className='dark:bg-gray-800 dark:text-gray-100'>
					<div className='container flex flex-col justify-center px-4 py-8 mx-auto md:p-8'>
						<h2 className='text-2xl py-3 font-semibold sm:text-4xl'>
							Question And Answer
						</h2>

						<div className='space-y-4'>
							<details className='w-full border rounded-lg'>
								<summary className='px-4 py-6 focus:outline-none text-xl font-semibold focus-visible:ring-violet-400'>
									What is cors?
								</summary>
								<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
									Cross-origin resource sharing (CORS) is a mechanism that
									allows restricted resources on a web page to be requested from
									another domain outside the domain from which the first
									resource was served.
								</p>
							</details>
							<details className='w-full border rounded-lg'>
								<summary className='px-4 py-6 focus:outline-none text-xl font-semibold focus-visible:ring-violet-400'>
									Why are you using firebase? What other options do you have to
									implement authentication?
								</summary>
								<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
									Firebase Authentication provides backend services, easy-to-use
									SDKs, and ready-made UI libraries to authenticate users to
									your app.
								</p>
								<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
									On this page. Add and initialize the Authentication SDK.
									(Optional) Prototype and test with Firebase Local Emulator
									Suite. Sign up new users. Sign in existing users. Set an
									authentication state observer and get user data. Next steps.
								</p>
							</details>
							<details className='w-full border rounded-lg'>
								<summary className='px-4 py-6 focus:outline-none text-xl font-semibold focus-visible:ring-violet-400'>
									How does the private route work?
								</summary>
								<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
									The private route component is similar to the public route,
									the only change is that redirect URL and authenticate
									condition. If the user is not authenticated he will be
									redirected to the login page and the user can only access the
									authenticated routes If he is authenticated (Logged in).
								</p>
							</details>
						</div>
					</div>
				</section>
			</div>
		);
};

export default FAQ;