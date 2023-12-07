import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { buttonVariants } from "@/components/ui/button"

const PropertyCard = ({ data }) => {
    const { title, description, price, location, img } = data
    return (
        <div className='rounded-xl flex  flex-col justify-between border p-2 '>
            <div className='h-[200px] rounded-xl overflow-hidden'>
                <Image className='rounded-xl scale-100 hover:scale-110 transition-all ease-in-out ' src={img} alt="property card" />
            </div>
            <div className='p-2  space-y-2'>
                <h2 className='text-primary-1 h3-semibold'>{title}</h2>
                <p className='base-normal'>{description}</p>

            </div>
            <div className='p-2  space-y-2'>

                <div className='flex justify-between'>
                    <div>
                        <p className='base-normal'>
                            Location:
                        </p>
                        <p className='base-medium'>
                            {location}
                        </p>
                    </div>
                    <div>
                        <p className='base-normal'>
                            Price
                        </p>
                        <p className='base-medium'>
                            {price}
                        </p>
                    </div>
                </div>
                <Button className={buttonVariants({ size: "sm" })}>Details</Button>
            </div>


        </div>

    );
};

export default PropertyCard;