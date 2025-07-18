import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestination from '../components/FeaturedDestination';
import ExclusiveOffer from '../components/ExclusiveOffer';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <FeaturedDestination></FeaturedDestination>
            <ExclusiveOffer></ExclusiveOffer>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;