import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
	  const [state, handleSubmit] = useForm('xpzeajqz');
		if (state.succeeded) {
			return <p className='text-green-500 flex justify-center'>Thanks for Contact with me!</p>;
		}
    return (
			<div>
				<section className='text-gray-600 body-font'>
					<div className='container mx-auto flex flex-col justify-center items-center'>
						<img
							className='lg:w-[200px] md:w-[100px] w-[50px] mb-10 object-cover object-center rounded'
							alt='hero'
							src='logo.png'
						/>
						<div className='w-full md:w-2/3 flex flex-col items-center text-center'>
							<p className='mb-8 leading-relaxed'>
								Programming is the process of creating a set of instructions
								that tell a computer how to perform a task. Programming can be
								done using a variety of computer programming languages, such as
								JavaScript, Python, and C++.
							</p>

							<div className='card  mb-20 flex-shrink-0 w-full max-w-sm shadow-2xl cardBG text-gray-700'>
								<form
									onSubmit={handleSubmit}
									action='https://formspree.io/f/xpzeajqz'
									method='POST'
									className='card-body'
								>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text text-gray-700'>Email</span>
										</label>
										<input
											type='email'
											name='email'
											placeholder='Your email'
											className='input text-gray-800 input-bordered'
										/>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text text-gray-700'>message</span>
										</label>
										<textarea
											name='message'
											className='textarea text-gray-800 textarea-bordered'
											placeholder='Your message for me'
										></textarea>
									</div>

									<div className='form-control'>
										<button type='submit' className='btn btn-primary'>
											Send
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
};

export default Contact;