"use client";

import Image from "next/image";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SEOImage from '../../../../public/SEO.png';
import dynamic from 'next/dynamic';

const CalendlyInline = dynamic(() => import('../../components/CalendlyInline'), {
  ssr: false,
});

export default function SEO() {
    return (
        <div>
            <Header />
            <section className="p-8 text-white" style={{backgroundColor: '#1B1B1B'}}>
                <div className="text-center mb-8 mt-16">
                    <h2 className="text-3xl font-bold text-red-600">Local/Global SEO Services</h2>
                </div>
                <div className="flex flex-col md:flex-row items-center p-8 rounded-lg shadow-md mb-8" style={{backgroundColor: '#202020'}}>
                    <div className="flex-1 mb-4 md:mb-0">
                        <Image
                            src={SEOImage}
                            alt="Enhance Your Presence"
                            width={300}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className="text-2xl font-bold text-red-600 mb-4">Enhance Your Online Presence</h3>
                        <p className="text-lg mb-4">
                            In today&apos;s digital age, having a robust online presence is crucial for the success of any business. Our Local/Global SEO services are designed to improve your website&apos;s visibility and help you reach a broader audience. Whether you&apos;re targeting a local market or aiming to expand globally, our tailored SEO strategies can help you achieve your goals.
                        </p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <ServiceCard
                            title="Keyword Research & Analysis"
                            description="We conduct comprehensive keyword research to identify the most relevant and high-performing keywords for your business."
                            icon="https://www.iconsdb.com/icons/preview/red/active-search-2-xxl.png"
                        />
                        <ServiceCard
                            title="On-Page SEO Optimization"
                            description="Our team will optimize your website's content, meta tags, images, and URLs to ensure they align with the best SEO practices."
                            icon="https://www.iconsdb.com/icons/preview/red/website-optimization-2-xxl.png"
                        />
                        <ServiceCard
                            title="Local SEO"
                            description="Specialized local SEO services, including optimizing your Google My Business profile and creating localized content."
                            icon="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/14_2-512.png"
                        />
                        <ServiceCard
                            title="Technical SEO"
                            description="A thorough technical SEO audit to identify and fix issues that could hinder your website's performance."
                            icon="https://cdn0.iconfinder.com/data/icons/nucleus-user-interface-2-lineal-color/64/terminal_coding_codes_code_symbol-512.png"
                        />
                        <ServiceCard
                            title="Link Building"
                            description="Link-building strategies to acquire high-quality backlinks from reputable websites."
                            icon="https://www.iconsdb.com/icons/preview/red/link-xxl.png"
                        />
                        <ServiceCard
                            title="Content Creation & Optimization"
                            description="Creating and optimizing engaging, SEO-friendly content that resonates with your audience."
                            icon="http://www.clker.com/cliparts/K/t/P/G/u/v/gear-red-md.png"
                        />
                    </div>
                    <CalendlyInline />
                    <h3 className="text-2xl font-bold text-red-600 mb-4">Why Choose Us?</h3>
                    <ul className="list-none pl-0 mb-8">
                        <li className="text-lg mb-2"><b>Proven Results:</b> Our SEO strategies have helped numerous businesses improve their search engine rankings and drive organic traffic.</li>
                        <li className="text-lg mb-2"><b>Tailored Solutions:</b> We customize our SEO services to meet your specific needs and objectives.</li>
                        <li className="text-lg mb-2"><b>Transparent Reporting:</b> Regular reports that track your website&apos;s performance and the progress of our SEO efforts.</li>
                    </ul>
                    <h3 className="text-2xl font-bold text-red-600 mb-4">Get Started Today</h3>
                    <p className="text-lg mb-8">
                        Ready to boost your online presence and drive more organic traffic to your website? Contact us today to learn more about our Local/Global SEO services and how we can help your business grow.
                    </p>
                    <div>
                        <p className="text-lg mb-2"><b>Phone:</b> +1 (317)-789-5564</p>
                        <p className="text-lg mb-2"><b>Email:</b> alexlotkov124@gmail.com</p>
                    </div>
                </div>
            </section>
            <Footer />
            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .slide-in-right {
                    animation: slideInRight 1s ease-out;
                }

                .service-card:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
}

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div className="p-6 rounded-lg shadow-md text-center transition-transform duration-300 service-card" style={{backgroundColor: '#202020'}}>
            <Image src={icon} alt={title} width={60} height={60} className="mx-auto mb-4" />
            <h4 className="text-xl font-bold text-red-600 mb-2">{title}</h4>
            <p className="text-lg">{description}</p>
        </div>
    );
};