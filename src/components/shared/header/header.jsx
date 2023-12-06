import React from 'react';
import logo from '/public/images/logos/dream-home-logo.png'
import Image from 'next/image';
import { Button } from "@/components/ui/button"


const Header = () => {
    return (
        <header className='flex justify-between py-4 items-center'>
            <div>
                <Image className='max-w-[200px]' src={logo} alt='logo' />
            </div>
            <ul className='flex justify-center gap-x-8 link-text'>
                <li>
                    <p>Home</p>
                </li>
                <li>
                    <p>Services</p>
                </li>
                <li>
                    <p>Property</p>
                </li>
                <li>
                    <p>Contact</p>
                </li>
            </ul>
            <ul className='flex justify-center gap-x-4 '>
                <li>
                    <Button variant="outline">Sign In</Button>
                </li>
                <li>
                    <Button >Sign Up</Button>
                </li>
            </ul>
        </header>
    );
};

export default Header;