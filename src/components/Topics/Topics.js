import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topicData = useLoaderData();
    console.log(topicData);

	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<img src={topicData.picture} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>Shoes!</h2>
				<p>{topicData.length}</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default Topics;