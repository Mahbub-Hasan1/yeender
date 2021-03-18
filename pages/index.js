import React from 'react';
import FeatureArea from '../components/Home/FeatureArea';
import Header from '../components/Home/Header';
import Portfolio from '../components/Home/Portfolio';
import Review from '../components/Home/Review';
import Services from '../components/Home/Services';
import About from '../components/ShareComponents/About';
import Contact from '../components/ShareComponents/Contact';

const index = () => {
    return (
        <div>
            <Header />
            <About />
            <FeatureArea />
            <Services />
            <Review />
            <Portfolio/>
            <Contact />
        </div>
    );
};

export default index;
