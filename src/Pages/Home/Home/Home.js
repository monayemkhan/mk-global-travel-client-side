import React from 'react';
import Banner from '../Banner/Banner';
import Travels from '../Travels/Travels';
import TrueFacts from '../TrueFacts/TrueFacts';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Travels></Travels>
            <TrueFacts></TrueFacts>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;