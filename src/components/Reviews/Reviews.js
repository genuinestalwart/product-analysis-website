import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <div>
            <h1 className='font-medium my-12 text-4xl text-center text-slate-500'>What Our Customers Say!</h1>
            <div className='gap-12 grid grid-cols-3 my-12'>
                {
                    reviews.map(el => <Review feedback={el}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;