"use client";

import Image from "next/image";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WebDevImage from '../../../../public/WebsiteDev.png';
import CalendlyInline from "@/app/components/CalendlyInline";

export default function WebsiteDevelopment() {
    return (
        <div>
            <Header />
            <section className="p-8 text-white" style={{backgroundColor: '#1B1B1B'}}>
                <div className="text-center mb-8 mt-16">
                    <h2 className="text-3xl font-bold text-red-600">Website Development Services</h2>
                </div>
                <div className="flex flex-col md:flex-row items-center p-8 rounded-lg shadow-md mb-8" style={{backgroundColor: '#202020'}}>
                    <div className="flex-1 mb-4 md:mb-0">
                        <Image
                            src={WebDevImage}
                            alt="Crafting Modern Websites"
                            width={300}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className="text-2xl font-bold text-red-600 mb-4">Crafting Modern, Responsive Websites</h3>
                        <p className="text-lg mb-4">
                            In today’s fast-paced digital world, having a well-designed, responsive website is crucial for any business aiming to succeed online. Our Fullstack Website Development services are designed to create visually appealing, highly functional websites that deliver an exceptional user experience across all devices.
                        </p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <ServiceCard
                            title="Custom Website Design"
                            description="Our team of skilled designers and developers work closely with you to create a unique, custom website that reflects your brand identity and meets your specific business needs. From initial concept to final launch, we ensure that every detail is perfect."
                        />
                        <ServiceCard
                            title="Responsive Web Development"
                            description="With the increasing use of mobile devices, having a responsive website is essential. We develop websites that automatically adjust to any screen size, providing a seamless user experience on desktops, tablets, and smartphones."
                        />
                        <ServiceCard
                            title="E-commerce Solutions"
                            description="Transform your online store with our comprehensive e-commerce solutions. We build secure, user-friendly e-commerce websites that make it easy for customers to browse and purchase your products, helping you increase sales and grow your business."
                        />
                        <ServiceCard
                            title="Content Management Systems (CMS)"
                            description="Manage your website content effortlessly with our CMS solutions. We integrate powerful CMS platforms like WordPress, Joomla, and Drupal, allowing you to easily update and maintain your website without any technical expertise."
                        />
                        <ServiceCard
                            title="Web Application Development"
                            description="Enhance your website’s functionality with our custom web application development services. Whether you need a booking system, customer portal, or any other web-based application, we create scalable, high-performance solutions tailored to your requirements."
                        />
                    </div>
                    <CalendlyInline />
                    <h3 className="text-2xl font-bold text-red-600 mb-4">Why Choose Us?</h3>
                    <ul className="list-none pl-0 mb-8">
                        <li className="text-lg mb-2"><b>Experienced Team:</b> Our team of developers has extensive experience in creating custom websites for a wide range of industries.</li>
                        <li className="text-lg mb-2"><b>User-Centric Design:</b> We focus on delivering a user-friendly experience that keeps your visitors engaged and encourages them to take action.</li>
                        <li className="text-lg mb-2"><b>Latest Technologies:</b> We stay up-to-date with the latest web development trends and technologies to ensure your website is built to the highest standards.</li>
                        <li className="text-lg mb-2"><b>SEO-Friendly:</b> Our websites are optimized for search engines, helping you improve your online visibility and attract more visitors.</li>
                        <li className="text-lg mb-2"><b>Ongoing Support:</b> We provide ongoing support and maintenance to keep your website running smoothly and efficiently.</li>
                    </ul>
                    <h3 className="text-2xl font-bold text-red-600 mb-4">Get Started Today</h3>
                    <p className="text-lg mb-8">
                        Ready to take your online presence to the next level? Contact us today to learn more about our Fullstack Website Development services and how we can help your business thrive online.
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
            <h4 className="text-xl font-bold text-red-600 mb-2">{title}</h4>
            <p className="text-lg">{description}</p>
        </div>
    );
};