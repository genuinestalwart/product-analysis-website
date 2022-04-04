import image from '../../food.png';
import React from 'react';

const Home = () => {
    return (
        <div className='px-20 py-2'>
            <section className='flex justify-around'>
                <div className='w-2/4'>
                    <h1 className='font-medium leading-normal my-12 text-4xl text-slate-500'>Feeling Hungry?<br />Need Some Snacks?<br />Just <span className='text-indigo-500'>Call Us!</span></h1>
                    <p className='my-8 text-slate-600'>No matter where you live or where you are at this moment. Just make a phone call and we will reach you with your desired items. We may not as fast as others, but we <strong>ensure the quality</strong> of our food. That's what makes us different from all other food delivery services!</p>
                    <button className='bg-indigo-400 hover:bg-indigo-500 my-4 px-4 py-2 active:ring ring-blue-400 ring-offset-2 rounded-md text-white'>Check out the store </button>
                </div>
                <div className='w-2/5'><img className='rounded-lg w-full' src={image} alt='food call' /></div>
            </section>
        </div>
    );
};

export default Home;