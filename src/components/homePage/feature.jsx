import React from 'react';
import happyClient from '/public/images/home/happy cleint.webp'
import elagantProperties from '/public/images/home/eleagant propertis.webp'
import Image from 'next/image';

const Feature = () => {
    return (
        <section className='my-10 grid grid-cols-3 flex-wrap gap-x-8'>
            <div className='bg-[#EAEAEC]  justify-between  py-4 px-6 rounded-xl flex '>
                <div>
                    <h2 className='h1-semibold'>
                        10 M+
                    </h2>
                    <p>Happy Customers</p>

                </div>
                <Image src={happyClient} alt='happy-client' className='w-32' />

            </div>
            <div className="bg-cover  gap-x-4  py-4 px-6 rounded-xl flex bg-[url('https://res.cloudinary.com/djnlyzsmv/image/upload/v1701854389/dream-homes-images/hero_xmuig3.webp')]">
                <div>
                    <h2 className='h1-semibold'>
                        12 K+
                    </h2>
                    <p className='font-medium'>Elegant Properties</p>

                </div>

            </div>
            <div className="bg-cover overflow-hidden gap-x-4  py-4 px-6 rounded-xl flex  justify-between bg-[#161618]">
                <div className='text-[#FEFEFE]' >
                    <h2 className='h1-semibold'>
                        8 +
                    </h2>
                    <p className='font-medium whitespace-nowrap'>Years of Experience</p>

                </div>
                <h2 className='text-[40px]  font-bold text-[#302F31]'>Dream</h2>
            </div>

        </section>
    );
};

export default Feature;