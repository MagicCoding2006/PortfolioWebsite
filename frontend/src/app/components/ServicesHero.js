"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SEOimage from '../../../public/SEO.png';
import WebDevImg from '../../../public/WebsiteDev.png';
import AppDevImg from '../../../public/AppDev.png';

export default function ServicesHero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const services = [
        {
            id: 1,
            title: "Local/Global SEO",
            description: "Enhancing your online presence through tailored SEO strategies to reach a broader audience.",
            image: SEOimage,
            link: "services/seo"
        },
        {
            id: 2,
            title: "Fullstack Website Development",
            description: "Creating responsive and interactive websites that meet your business needs.",
            image: WebDevImg,
            link: "/services/website-development"
        },
        {
            id: 3,
            title: "Fullstack App Development",
            description: "Developing comprehensive applications with seamless user experiences across devices.",
            image: AppDevImg,
            link: "/services/app-development"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 7000); // Change slide every 7 seconds

        return () => clearInterval(interval);
    }, [services.length]);

    const handleDotClick = (index) => {
        setActiveIndex(index);
        const container = containerRef.current;
        container.scrollTo({
            left: container.offsetWidth * index,
            behavior: 'smooth'
        });
    };

    return (
        <section className="flex flex-col justify-center items-center w-full h-[89vh] md:h-screen text-white overflow-hidden relative md:pt-16 mt-20" style={{backgroundColor: '#0F0F0F', zIndex: 10}}>
            <div ref={containerRef} className="flex justify-center items-center w-full h-full relative mb-20">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`service-item absolute w-full h-full top-0 left-0 transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
                        style={{
                            transform: `translateX(${(index - activeIndex) * 100}%)`
                        }}
                    >
                        <Link href={service.link}>
                            <div className="flex flex-col md:flex-row items-center gap-4 p-8 md:p-16 h-full">
                                <div className="flex-1 md:flex-1.5 md:pr-20">
                                    <Image src={service.image} alt={service.title} layout="responsive" width={450} height={300} className="transform scale-105" />
                                </div>
                                <div className="flex-1 md:flex-1.5 text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-lg md:text-xl mb-4">{service.description}</p>
                                    <p className="text-lg md:text-xl text-red-600 font-bold cursor-pointer">Learn More</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 left-4 flex gap-2 mt-24">
                {services.map((_, index) => (
                    <div
                        key={index}
                        className={`w-16 h-4 rounded-full cursor-pointer transition-colors duration-300 ${index === activeIndex ? "bg-red-600" : "bg-gray-600"}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
}

const servicesHeroSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#0F0F0F', // Dark background
    color: '#FCFCFC', // Light text
    overflow: 'hidden',
    position: 'relative'
};

const serviceItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'left',
    transition: 'opacity 1s ease-in-out',
};

const paginationContainerStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10px'
};

const paginationDotStyle = {
    width: '60px',
    height: '10px',
    borderRadius: '20%', // Change from 50% to 20% to make it more like a bar
    backgroundColor: '#555', // Default grey color
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
};