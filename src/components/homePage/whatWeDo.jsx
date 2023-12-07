"use client"
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { MdArrowOutward } from "react-icons/md";
const WhatWeDo = () => {
    const [Limit, setLimit] = useState(1);
    const globalClass = "min-h-[400px] cursor-pointer flex items-end relative p-6 bg-cover rounded-2xl overflow-hidden"


    return (
        <div className="my-20 ">
            <h2 className="text-center mb-6 h2-semibold">What We Do</h2>
            <div className=' flex max-w-full  transform transition-all ease-in-out gap-6'>
                <div onClick={() => setLimit(1)} className={`${Limit === 1 ? " w-[60%]" : "w-[20%]"}   transform transition-all ease-in-out   bg-[url('https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=600')] ${globalClass} `}>
                    <div className='relative z-20'>
                        <h2 className='text-2xl  mb-3 font-semibold text-white'>Property Management</h2>
                        {
                            Limit === 1 && <p className='text-white text-sm leading-[120%]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat, at odio minus nesciunt molestias! Delectus dignissimos a modi aliquid?
                            </p>
                        }
                    </div>
                    {
                        Limit === 1 && <div className="bg-white z-20 p-2 absolute top-5 right-5 rounded-full ">
                            <MdArrowOutward />
                        </div>
                    }

                    <div className={`${Limit === 1 ? "opacity-100" : 'opacity-0'} absolute backdrop-blur-sm rounded-2xl bg-black/25 w-full h-full top-0 left-0`}>

                    </div>
                </div>
                <div onClick={() => setLimit(2)} className={`${Limit === 2 ? " w-[60%]" : "w-[20%]"}  transform transition-all ease-in-out   bg-[url('https://images.pexels.com/photos/4963438/pexels-photo-4963438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ${globalClass} `}>
                    <div className='relative z-20'>
                        <h2 className='text-2xl mb-3 font-semibold text-white'>Nagotiations and Offers</h2>
                        {
                            Limit === 2 && <p className='text-white text-sm leading-[120%]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat, at odio minus nesciunt molestias! Delectus dignissimos a modi aliquid?
                            </p>
                        }
                    </div>
                    {
                        Limit === 2 && <div className="bg-white z-20 p-2 absolute top-5 right-5 rounded-full ">
                            <MdArrowOutward />
                        </div>
                    }
                    <div className={`${Limit === 2 ? "opacity-100" : 'opacity-0'} absolute backdrop-blur-sm rounded-2xl bg-black/25 w-full h-full top-0 left-0`}>

                    </div>
                </div>
                <div onClick={() => setLimit(3)} className={`${Limit === 3 ? " w-[60%]" : "w-[20%]"}   transform transition-all ease-in-out   bg-[url('https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ${globalClass} `}>
                    <div className='relative z-20'>
                        <h2 className='text-2xl  mb-3 font-semibold text-white'>Marketing and Advertisement</h2>
                        {
                            Limit === 3 && <p className='text-white text-sm leading-[120%]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat, at odio minus nesciunt molestias! Delectus dignissimos a modi aliquid?
                            </p>
                        }
                    </div>
                    {
                        Limit === 3 && <div className="bg-white z-20 p-2 absolute top-5 right-5 rounded-full ">
                            <MdArrowOutward />
                        </div>
                    }
                    <div className={`${Limit === 3 ? "opacity-100" : 'opacity-0'} absolute backdrop-blur-sm rounded-2xl bg-black/25 w-full h-full top-0 left-0`}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;