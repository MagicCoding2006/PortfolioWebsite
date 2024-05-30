"use client";

import Image from 'next/image';
import Selfie from '../../../public/Developer.png';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-16 h-screen text-white mt-16" style={{backgroundColor: '#000'}}>
            <div className="flex-1 flex flex-col justify-center pr-8 lg:pr-16 animate-slideFadeInLeft">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-shadow">👋 Hello, I&apos;m <b className='text-red-600'>Alex</b></h1>
                <h2 className="text-2xl lg:text-3xl mb-4 text-red-600">Developer</h2>
                <p className="text-lg lg:text-xl mb-8 max-w-lg">With a passion for creating visually stunning and user-friendly designs, I specialize in Local/Global SEO, Fullstack Website Development, and Fullstack App Development. My goal is to help businesses elevate their online presence through innovative and effective digital solutions.</p>
                <Link href="/about">
                    <button className='bg-red-600 w-full lg:w-96 py-2 px-4 rounded-md text-white font-bold shadow-md hover:bg-red-700 transition-colors duration-300'>About Me</button>
                </Link>
            </div>
            <div className="flex-1 flex justify-center items-center animate-slideFadeInRight mt-8 lg:mt-0">
                <Image
                    src={Selfie}
                    alt="Hero Image"
                    layout="intrinsic"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}

const styles = `
@keyframes slideFadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-50%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideFadeInRight {
    from {
        opacity: 0;
        transform: translateX(50%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (min-width: 1024px) {
    .animate-slideFadeInLeft {
        animation: slideFadeInLeft 1s forwards;
    }
    
    .animate-slideFadeInRight {
        animation: slideFadeInRight 1s forwards;
    }
}
`;

// Injecting the styles into the document
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}