"use client";

import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import dynamic from 'next/dynamic';

const CalendlyInline = dynamic(() => import('../../components/CalendlyInline'), {
  ssr: false,
});

export default function AppDevelopment() {
    return (
        <div>
            <Header />
            <section className="p-8 text-white" style={{ backgroundColor: '#1B1B1B' }}>
                <div className="text-center mb-8 mt-16">
                    <h2 className="text-3xl font-bold text-red-600">App Development Services</h2>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-red-600 mb-4">Comprehensive App Development Services</h3>
                        <p className="text-lg mb-4">
                            In today&apos;s digital age, having a mobile application is essential for businesses of all sizes. Whether you&apos;re a large corporation or a small business, our Fullstack App Development services are designed to create seamless, high-quality applications that meet your specific needs and help you connect with your audience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <ServiceCard
                            title="Custom App Design"
                            description="Our team of experienced designers and developers work together to create custom mobile applications tailored to your brand and business goals. We focus on delivering user-friendly, visually appealing apps that provide an exceptional user experience."
                        />
                        <ServiceCard
                            title="Cross-Platform Development"
                            description="We specialize in developing cross-platform mobile applications using technologies like React Native and Flutter. This ensures that your app runs smoothly on both iOS and Android devices, providing a consistent experience for all users."
                        />
                        <ServiceCard
                            title="E-commerce App Solutions"
                            description="Transform your online store with our comprehensive e-commerce app solutions. We build secure, user-friendly mobile applications that make it easy for customers to browse and purchase your products, helping you increase sales and grow your business."
                        />
                        <ServiceCard
                            title="Small Business Solutions"
                            description="We believe that every business, no matter the size, should have access to top-quality app development services. Our solutions are designed to be affordable and scalable, ensuring that even smaller businesses can benefit from having a professional mobile application."
                        />
                        <ServiceCard
                            title="Maintenance and Support"
                            description="Our commitment to your success does not end with the launch of your app. We provide ongoing maintenance and support to ensure that your app continues to perform optimally and stays up-to-date with the latest technology trends."
                        />
                    </div>
                    <CalendlyInline />
                    <h3 className="text-2xl font-bold text-red-600 mb-4">Why Choose Us?</h3>
                    <ul className="list-none pl-0 mb-8">
                        <li className="text-lg mb-2"><b>Experienced Team:</b> Our developers have extensive experience in creating custom mobile applications for a wide range of industries.</li>
                        <li className="text-lg mb-2"><b>User-Centric Design:</b> We prioritize delivering a user-friendly experience that keeps your audience engaged and encourages them to take action.</li>
                        <li className="text-lg mb-2"><b>Latest Technologies:</b> We stay up-to-date with the latest mobile development trends and technologies to ensure your app is built to the highest standards.</li>
                        <li className="text-lg mb-2"><b>Scalable Solutions:</b> Our app development solutions are designed to grow with your business, ensuring that your app remains relevant and effective as your business evolves.</li>
                        <li className="text-lg mb-2"><b>Affordable Pricing:</b> We offer competitive pricing to ensure that even small businesses can afford top-quality app development services.</li>
                    </ul>
                    <h3 className="text-2xl font-bold text-red-600 mb-4">Get Started Today</h3>
                    <p className="text-lg mb-8">
                        Ready to elevate your business with a custom mobile application? Contact us today to learn more about our Fullstack App Development services and how we can help your business thrive in the digital world.
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
        <div className="p-6 rounded-lg shadow-md text-center transition-transform duration-300 service-card" style={{ backgroundColor: '#202020' }}>
            <h4 className="text-xl font-bold text-red-600 mb-2">{title}</h4>
            <p className="text-lg">{description}</p>
        </div>
    );
};