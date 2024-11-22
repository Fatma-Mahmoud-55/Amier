'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar(props) {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Business', href: '/#' },
        { name: 'Advice', href: '/#' },
        { name: 'About', href: '/#' },
        { name: 'Reviews ', href: '/#' },
        { name: 'FAQ', href: '/#' },
        { name: 'Therapist jobs', href: '/#' },
        { name: 'Contact', href: '/#' },
    ];

    // Track scrolling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Adjust the threshold as needed
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                className={`w-full flex justify-between fixed top-0 z-[5000] py-4 px-10 transition-all duration-300 ${
                    isScrolled ? 'bg-white text-green-700 shadow-md' : 'bg-transparent text-white'
                }`}
            >
                {/* Logo */}
                <div>
                    <Link href='/'>
                        <p className="font-bold text-xl">Logoo</p>
                    </Link>
                </div>

                {/* Menu && Buttons */}
                <div className='flex justify-between gap-5 items-center'>
                    {/* Menu */}
                    <div className='flex gap-4 items-center'>
                        {navLinks.map((link) => {
                            const isActive = pathname.endsWith(link.href);
                            return (
                                <div
                                    className={`p-2 border-b-4 ${
                                        isActive
                                            ? 'border-green-700'
                                            : 'border-transparent hover:border-green-700'
                                    }`}
                                    key={link.name}
                                >
                                    <Link href={link.href}>
                                        <p className={`font-[500] ${isScrolled ? 'text-green-700' : 'text-white'}`}>
                                            {link.name}
                                        </p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* Buttons */}
                    <div className='flex gap-3'>
                        <button
                            className={`py-2 px-7 rounded-full ${
                                isScrolled
                                    ? 'text-green-700 bg-white border border-green-700'
                                    : 'text-white bg-transparent border border-white'
                            }`}
                        >
                            Login
                        </button>
                        <button
                            className={`py-2 px-7 rounded-full ${
                                isScrolled
                                    ? ' text-green-700 bg-[#a6de9b]'
                                    : 'text-green-700 bg-white '
                            }`}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
