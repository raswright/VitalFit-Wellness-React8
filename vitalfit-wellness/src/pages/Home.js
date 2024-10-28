import React from 'react';
import Header from '../components/Home Page (index)/Header/Header';
import HeroSection from '../components/Home Page (index)/HeroSection/HeroSection';
import WhoWeAre from '../components/Home Page (index)/WhoWeAre/WhoWeAre';
import ClientCarousel from '../components/Home Page (index)/ClientCarousel/ClientCarousel';
import WhyChooseUs from '../components/Home Page (index)/WhyChooseUs/WhyChooseUs';
import CallToAction from '../components/Home Page (index)/CallToAction/CallToAction';
import Footer from '../components/Home Page (index)/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <WhoWeAre />
            <ClientCarousel />
            <WhyChooseUs />
            <CallToAction />
            <Footer />
        </>
    );
};

export default Home;