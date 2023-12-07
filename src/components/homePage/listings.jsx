import React from 'react';
import property1 from '/public/images/properties/property2.png'
import PropertyCard from '../shared/PropertyCard/PropertyCard';


const Listings = () => {
    const listings = [
        {
            title: 'Modern Apartment in Downtown',
            description: 'Stylish and spacious apartment with great city views.',
            price: '$1,200,000',
            location: 'New York, NY',
            img: property1
        },
        {
            title: 'Cozy Cottage in the Countryside',
            description: 'Charming cottage surrounded by nature for a peaceful retreat.',
            price: '$350,000',
            location: 'Rural Area, USA',
            img: property1
        },
        {
            title: 'Luxury Condo with Ocean View',
            description: 'Elegant condo with stunning ocean views and top-notch amenities.',
            price: '$800,000',
            location: 'Miami, FL',
            img: property1
        },
        {
            title: 'Spacious Family Home',
            description: 'Family-friendly home with multiple bedrooms and a large backyard.',
            price: '$500,000',
            location: 'Austin, TX',
            img: property1
        },
        {
            title: 'Mountain View Retreat',
            description: 'Escape to the mountains in this cozy retreat with panoramic views.',
            price: '$450,000',
            location: 'Denver, CO',
            img: property1
        },
        {
            title: 'Urban Loft in the Arts District',
            description: 'Industrial-style loft in a vibrant arts district with cultural attractions.',
            price: '$700,000',
            location: 'Los Angeles, CA',
            img: property1
        }
    ];
    return (
        <div className='my-20 '>
            <h2 className="text-center mb-6 h2-semibold">Featured Listings</h2>


            <div className='grid-cols-3 grid gap-4'>
                {
                    listings.map((property, i) => <PropertyCard key={i} data={property} />)
                }
            </div>
        </div>
    );
};

export default Listings;

