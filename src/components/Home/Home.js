import image from '../../food.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReviews();

    return (
        <div className='px-20'>
            <section className='flex justify-around my-4'>
                <div className='w-2/4'>
                    <h1 className='font-medium leading-normal my-12 text-4xl text-slate-600'>Feeling Hungry?<br />Need Some Snacks?<br />Just <span className='text-indigo-500'>Call Us!</span></h1>
                    <p className='my-8 text-slate-600'>No matter where you live or where you are at this moment. Just make a phone call and we will reach you with your desired items. We may not as fast as others, but we <strong>ensure the quality</strong> of our food. That's what makes us different from all other food delivery services!</p>
                    <button className='bg-indigo-400 hover:bg-indigo-500 my-4 px-4 py-2 active:ring ring-blue-400 ring-offset-2 rounded-md text-white'>Check out the store <span className='ml-2'><FontAwesomeIcon icon={faStore}></FontAwesomeIcon></span></button>
                </div>
                <div className='w-2/5'><img className='rounded-lg w-full' src={image} alt='food call' /></div>
            </section>

            <section className='my-4'>
                <h2 className='font-medium my-8 text-center text-3xl text-slate-600'>Customer Reviews (3)</h2>
                <div className='gap-12 grid grid-cols-3 my-8'>
                    {
                        reviews.slice(0, 3).map(el => <Review feedback={el}></Review>)
                    }
                </div>
                <div className='text-center my-8'>
                    <Link to='/reviews'><button className='bg-indigo-400 hover:bg-indigo-500 px-4 py-2 active:ring ring-blue-400 ring-offset-2 rounded-md text-white'>See all the reviews</button></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;