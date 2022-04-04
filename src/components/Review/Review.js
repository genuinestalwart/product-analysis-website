import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(farStar);

const Review = (props) => {
    const { name, image, ratings, feedback } = props.feedback;

    return (
        <div className='bg-indigo-200 p-6 rounded-lg'>
            <div className='flex items-center justify-between'>
                <div className='w-1/4'><img className='rounded-full w-full' src={image} alt={name} /></div>
                <h4 className='font-medium text-slate-800 text-lg w-3/5'>{name}</h4>
            </div>
            <p className='my-4'>{feedback}</p>
            <div>Ratings: <span className='mx-4 text-cyan-500'>{
                ratings === 5 ?
                    <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span> :
                    ratings === 4.5 ?
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon></span> :
                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={farStar}></FontAwesomeIcon></span>
            }</span></div>
        </div>
    );
};

export default Review;