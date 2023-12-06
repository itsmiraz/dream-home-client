import React from 'react';
import bg from '/public/images/home/hero-bg.png'
import Image from 'next/image';
import SearchBar from './searchBar';

const Hero = () => {
    return (
        <div className="bg-cover h-[600px] flex flex-col justify-between items-start rounded-[30px] py-20 px-20  bg-[url('https://res.cloudinary.com/djnlyzsmv/image/upload/v1701854389/dream-homes-images/hero_xmuig3.webp')]" >
            <div>
                <h1 className='h1-bold text-primary-1'>Discover your <br />
                    perfect order</h1>

                <p className='base-medium pt-3'>
                    Real Estate Property for Rent <br />
                    And Sell over 12+ countries
                </p>
            </div>
            <SearchBar />
        </div>
    );
};

export default Hero;