"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MindfulnessZoneBanner from '../../../public/MindfulnessZoneBanner.png';
import CallAnalyzer from '../../../public/CallAnalyzer.png';
import AITravelApp from '../../../public/AITravelApp.png';
import RAGimg from '../../../public/RAGimg.png';

export default function PortfolioHero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const services = [
        {
            id: 1,
            title: "Mindfulness Zone App",
            description: "An app made to help people focus and overcome anxiety",
            image: MindfulnessZoneBanner,
        },
        {
            id: 2,
            title: "AI Call Analyzer",
            description: "A specialized AI-powered SaaS designed to enhance the performance of Sales Development Representatives (SDRs) by analyzing their calls and identifying areas for improvement. The platform also includes robust management features for team leads to oversee and optimize SDR performance. The solution is hosted securely in the cloud via Google Cloud Run (GCR).",
            image: CallAnalyzer,
        },
        {
            id: 3,
            title: "Travel Planning App Powered By AI",
            description: "An innovative travel application that integrates multiple tools to streamline the vacation booking process, reducing it to under 10 minutes. Leveraging web scraping, along with APIs for flights, hotels, and Google Console, this app provides a seamless and efficient booking experience.",
            image: AITravelApp,
        },
        {
            id: 4,
            title: "AI Social Media Assistant",
            description: "An advanced SaaS solution that employs web scraping to aggregate content from your social media accounts. The platform downloads videos, analyzes them frame by frame, examines engagement metrics and transcripts, and leverages Retrieval-Augmented Generation (RAG) with a Large Language Model (LLM) to facilitate interactive insights and suggestions based on your content.",
            image: RAGimg,
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
        <section className="flex flex-col justify-center items-center w-full h-[80vh] md:h-screen text-white overflow-hidden relative md:pt-16 mt-20" style={{ backgroundColor: '#0F0F0F', zIndex: 10 }}>
            <div ref={containerRef} className="flex justify-center items-center w-full h-full relative mb-10">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`service-item absolute w-full h-full top-0 left-0 transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
                        style={{
                            transform: `translateX(${(index - activeIndex) * 100}%)`
                        }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-4 p-8 md:p-16 h-full">
                            <div className="flex-1">
                                <Image src={service.image} alt={service.title} layout="responsive" width={450} height={300} className="rounded-lg" />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                                <p className="text-lg md:text-xl mb-4">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 left-4 flex gap-2 mt-24">
                {services.map((_, index) => (
                    <div
                        key={index}
                        className={`w-16 mt-24 h-4 rounded-full cursor-pointer transition-colors duration-300 ${index === activeIndex ? "bg-red-600" : "bg-gray-600"}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
            <style jsx>{`
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeOutLeft {
                    from {
                        opacity: 1;
                        transform: translateX(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateX(-100%);
                    }
                }

                .service-item {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    transition: opacity 1s ease-in-out;
                }

                .service-item.active {
                    animation: fadeInRight 1s forwards;
                }

                .service-item.previous {
                    animation: fadeOutLeft 1s forwards;
                }
            `}</style>
        </section>
    );
}
