"use client";

import Link from "next/link";
import Image from "next/image";
import SEOimage from '../../../public/SEO.png';
import WebDevImg from '../../../public/WebsiteDev.png';
import AppDevImg from '../../../public/AppDev.png';

export default function IndividualServices() {
    const services = [
        {
            id: 1,
            title: "SEO",
            description: "Enhancing your online presence through tailored SEO strategies to reach a broader audience.",
            details: [
                "Keyword Research",
                "On-Page Optimization",
                "Off-Page Optimization",
                "Content Strategy",
                "Analytics and Reporting"
            ],
            startingPrice: "Starts $99/month",
            image: SEOimage,
            link: "/services/seo"
        },
        {
            id: 2,
            title: "Web Development",
            description: "Creating responsive and interactive websites that meet your business needs.",
            details: [
                "Custom Website Design",
                "Responsive Development",
                "E-commerce Solutions",
                "Content Management Systems",
                "Website Maintenance"
            ],
            startingPrice: "Starts $199",
            image: WebDevImg,
            link: "/services/website-development"
        },
        {
            id: 3,
            title: "App Development",
            description: "Developing comprehensive applications with seamless user experiences across devices.",
            details: [
                "iOS and Android Development",
                "UI/UX Design",
                "Backend Development",
                "App Integration",
                "Maintenance and Support"
            ],
            startingPrice: "Starts $299",
            image: AppDevImg,
            link: "/services/app-development"
        }
    ];

    return (
        <section className="flex flex-col justify-center items-center p-8 text-white" style={{backgroundColor: '#0F0F0F'}}>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-red-600">Services</h1>
            </div>
            <div className="flex flex-col gap-8 w-full max-w-6xl">
                {services.map((service, index) => (
                    <div key={service.id} className="flex flex-col md:flex-row items-center p-8 rounded-lg shadow-md" style={{backgroundColor: '#202020'}}>
                        <div className="flex-1 mb-4 md:mb-0 md:mr-8">
                            <Image src={service.image} alt={service.title} layout="responsive" width={450} height={300} />
                        </div>
                        <div className="flex-1 text-left">
                            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                            <h3 className="text-xl text-red-600 mb-2">{service.startingPrice}</h3>
                            <p className="text-lg mb-4">{service.description}</p>
                            <ul className="list-disc pl-6 mb-4">
                                {service.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                            <Link href={service.link}>
                                <p className="text-lg text-red-600 font-bold cursor-pointer hover:text-white transition-colors">Learn More</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}