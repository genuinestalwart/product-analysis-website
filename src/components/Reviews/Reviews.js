import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <div className='gap-12 grid grid-cols-3 my-4'>
            {
                reviews.map(el => <Review feedback={el}></Review>)
            }
        </div>
    );
};

export default Reviews;