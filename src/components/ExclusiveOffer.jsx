import React from 'react';
import Title from './Title';
import { assets } from '../assets/assets';

const ExclusiveOffer = () => {
    return (
        <div>
            <div>
                <Title align='left' title='Exclusive Offers' subTitle=' Take advantage of our limited-time offers and special package to enhance your stay and create unforgettable memories.'></Title>
                <button>
                    View All offers
                    <img src={assets.arrowIcon} alt="arrow-icon"
                    className='group-hover:translate-x-1 transition-all' />
                </button>
            </div>
        </div>
    );
};

export default ExclusiveOffer;