import React from 'react';
import image1 from '/public/images/testimonials/portrait.jpeg'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from 'next/image';
const Testimonials = () => {
    const testimonials = [
        {
            review: 'Exceptional service and attention to detail. I highly recommend!  service and attention to detail. I highly recommend! service and attention to detail. I highly recommend!',
            img: image1,
            name: 'John Doe',
            company: 'ABC Corporation'
        },
        {
            review: 'Amazing experience! The team went above and beyond to meet our needs.Amazing experience! The team went above and beyond to meet our needs.Amazing experience! The team went above and beyond to meet our needs.Amazing experience! The team went above and beyond to meet our needs.',
            img: image1,
            name: 'Jane Smith',
            company: 'XYZ Company'
        },
        {
            review: 'Outstanding quality and professionalism. Truly satisfied with their work.Amazing experience! The team went above and beyond to meet our needs.Amazing experience! The team went above and beyond to meet our needs.',
            img: image1,
            name: 'Alex Johnson',
            company: '123 Industries'
        },
        {
            review: 'Prompt and efficient service. Couldn\'t be happier with the results! Prompt and efficient service. Couldn\'t be happier with the results!Prompt and efficient service. Couldn\'t be happier with the results!Prompt and efficient service. Couldn\'t be happier with the results!',
            img: image1,
            name: 'Emily Brown',
            company: 'Smith & Co.'
        },
        {
            review: 'Excellent communication and timely delivery. A pleasure to work with!Excellent communication and timely delivery. A pleasure to work with!',
            img: image1,
            name: 'Chris Miller',
            company: 'Tech Solutions LLC'
        },
        {
            review: 'Top-notch professionals! Delivered exactly what we needed on time. Top-notch professionals! Delivered exactly what we needed on time. Top-notch professionals! Delivered exactly what we needed on time.',
            img: image1,
            name: 'Megan Wilson',
            company: 'Innovate Enterprises'
        }
    ];


    return (
        <div className='my-20'>

            <h2 className="text-center mb-6 h2-semibold">Testimonial</h2>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}

            >
                <Masonry gutter={20}>
                    {
                        testimonials.map((testimonail, i) => <TestimonialCard data={testimonail} key={i} />)
                    }
                </Masonry>
            </ResponsiveMasonry>
            <div>

            </div>
        </div>
    );
};

export default Testimonials;


const TestimonialCard = ({ data }) => {
    const { review, img, name, company } = data
    return (
        <div className='pt-4 px-4 bg-[#EAEAEC] rounded-lg border'>
            <div>
                <ImQuotesLeft className='text-zinc-600 text-xl mb-2' />
                <p className='base-light'>
                    {review}
                </p>
                <div className='text-end flex justify-end'>
                    <ImQuotesRight className='text-zinc-600  text-xl' />
                </div>
            </div>
            <div className='flex border rounded-xl gap-x-4 items-center p-4'>
                <Image src={img} alt='profile' className='w-10 h-10 rounded-full' />
                <div>
                    <h2 className='base-medium'>{name}</h2>
                    <p className='base-light'>{company}</p>
                </div>
            </div>
        </div>
    )
}