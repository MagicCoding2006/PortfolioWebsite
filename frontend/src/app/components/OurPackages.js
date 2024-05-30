"use client";

import Link from "next/link";
import Image from "next/image";
import SEOimage from '../../../public/SEO.png';
import WebDevImg from '../../../public/WebsiteDev.png';
import AppDevImg from '../../../public/AppDev.png';

export default function OurPackages() {
    const packages = [
        {
            id: 1,
            title: "All in One",
            description: "| Includes SEO, Web Development, and App Development. A complete package to enhance your online presence and functionality.",
            services: [SEOimage, WebDevImg, AppDevImg],
        },
        {
            id: 2,
            title: "Web Development & SEO",
            description: "| Combines Web Development with SEO to build a robust and optimized online presence.",
            services: [WebDevImg, SEOimage],
        },
        {
            id: 3,
            title: "App & Web Development",
            description: "| Offers both App Development and Web Development to provide a seamless user experience across platforms.",
            services: [AppDevImg, WebDevImg],
        }
    ];

    return (
        <section style={packagesSectionStyle}>
            <div style={headerStyle}>
                <h1 style={packagesTitleStyle}>Bundles</h1>
            </div>
            <div style={redBoxStyle}>
                <p style={redBoxTextStyle}>We can discuss bundles and discounts on our call</p>
            </div>
            <div style={packagesContainerStyle}>
                {packages.map((pkg) => (
                    <div key={pkg.id} style={packageCardStyle} className="package-card">
                        <h3 style={packageTitleStyle}>{pkg.title}</h3>
                        <p style={packageDescriptionStyle}>{pkg.description}</p>
                        <div style={servicesContainerStyle}>
                            {pkg.services.map((service, index) => (
                                <div key={index} style={serviceImageContainerStyle}>
                                    <Image src={service} alt={pkg.title} layout="responsive" width={80} height={80} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(50%);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .package-card {
                    animation: fadeInUp 0.5s ease-in-out;
                }
            `}</style>
        </section>
    );
}

const packagesSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#111', // Dark background
    color: '#FCFCFC', // Light text
};

const headerStyle = {
    marginBottom: '2rem',
};

const packagesTitleStyle = {
    fontSize: '2.5rem',
    color: '#E11D48', // Red color for the title
    fontWeight: 'bold',
    paddingBottom: '0.5rem',
};

const redBoxStyle = {
    backgroundColor: '#E11D48', // Red background for the box
    padding: '1rem 2rem',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '2rem',
};

const redBoxTextStyle = {
    color: '#FCFCFC', // White text for the box
    fontSize: '1.2rem',
    fontWeight: 'bold',
};

const packagesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2rem',
    width: '100%',
    maxWidth: '1200px',
};

const packageCardStyle = {
    backgroundColor: '#202020', // Dark background for each package
    padding: '2rem',
    borderRadius: '10px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a polished look
    width: '100%',
    maxWidth: '350px',
    transition: 'transform 0.3s ease-in-out',
};

const packageTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
};

const packageDescriptionStyle = {
    fontSize: '1rem',
    marginBottom: '1rem',
};

const servicesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '1rem',
};

const serviceImageContainerStyle = {
    flex: '1',
    margin: '0 10px',
};

const learnMoreStyle = {
    fontSize: '1rem',
    color: '#E11D48', // Red color for Learn More link
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
    marginTop: '1rem',
    transition: 'color 0.3s ease-in-out',
};

learnMoreStyle[':hover'] = {
    color: '#fff'
};