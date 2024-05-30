"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Services() {
    const serviceContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = serviceContainerRef.current;
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight - 100) {
                    section.classList.add("slide-up");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="flex flex-col justify-center items-center p-8 text-white" style={{backgroundColor: '#0C0C0C'}}>
            <h2 className="text-3xl font-bold mb-8 text-red-600">Our Services</h2>
            <div ref={serviceContainerRef} className="service-container grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <div className="service-item">
                    <Link href="/services/seo">
                        <div className="text-2xl text-red-600 mb-4">🔍</div>
                        <h3 className="text-xl font-bold mb-2">Local/Global SEO</h3>
                        <p className="text-base mb-4">Enhancing your online presence through tailored SEO strategies to reach a broader audience.</p>
                        <p className="text-red-600 font-bold cursor-pointer">Learn More</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link href="/services/website-development">
                        <div className="text-2xl text-red-600 mb-4">💻</div>
                        <h3 className="text-xl font-bold mb-2">Fullstack Website Development</h3>
                        <p className="text-base mb-4">Creating responsive and interactive websites that meet your business needs.</p>
                        <p className="text-red-600 font-bold cursor-pointer">Learn More</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link href="/services/app-development">
                        <div className="text-2xl text-red-600 mb-4">📱</div>
                        <h3 className="text-xl font-bold mb-2">Fullstack App Development</h3>
                        <p className="text-base mb-4">Developing comprehensive applications with seamless user experiences across devices.</p>
                        <p className="text-red-600 font-bold cursor-pointer">Learn More</p>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(50%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .service-container .service-item {
                    background-color: #202020;
                    padding: 2rem;
                    border-radius: 10px;
                    text-align: left;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    opacity: 0;
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }

                .slide-up .service-item {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
        </section>
    );
}