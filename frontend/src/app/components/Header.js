"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../../public/PortfolioLogo.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="flex justify-between items-center p-4 bg-black border-b border-gray-700 fixed w-full top-0 z-50 mb-16">
            <Link href="/">
                <Image
                    src={Logo} // Replace with the actual path to your logo
                    alt="Logo"
                    width={50}
                    height={50}
                    className="cursor-pointer"
                />
            </Link>
            <nav className="hidden md:flex gap-44">
                <Link href="/">
                    <p className="text-white text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">Home</p>
                </Link>
                <Link href="/services">
                    <p className="text-white text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">Services</p>
                </Link>
                <Link href="/about">
                    <p className="text-white text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">About</p>
                </Link>
                <Link href="/portfolio">
                    <p className="text-white text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">Portfolio</p>
                </Link>
                <Link href="/contact">
                    <p className="text-white text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">Contact</p>
                </Link>
            </nav>
            <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none text-3xl">
                ☰
            </button>
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center transform transition-transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
                <button onClick={toggleMenu} className="text-white text-3xl mb-8">
                    ✕
                </button>
                <Link href="/">
                    <p onClick={toggleMenu} className="text-white text-2xl font-bold mb-4 cursor-pointer">Home</p>
                </Link>
                <Link href="/services">
                    <p onClick={toggleMenu} className="text-white text-2xl font-bold mb-4 cursor-pointer">Services</p>
                </Link>
                <Link href="/about">
                    <p onClick={toggleMenu} className="text-white text-2xl font-bold mb-4 cursor-pointer">About</p>
                </Link>
                <Link href="/portfolio">
                    <p onClick={toggleMenu} className="text-white text-2xl font-bold mb-4 cursor-pointer">Portfolio</p>
                </Link>
                <Link href="/contact">
                    <p onClick={toggleMenu} className="text-white text-2xl font-bold mb-4 cursor-pointer">Contact</p>
                </Link>
            </div>
        </header>
    );
}