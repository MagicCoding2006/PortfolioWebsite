"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Skills() {
    const skillsContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = skillsContainerRef.current;
            if (container) {
                const containerTop = container.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (containerTop < windowHeight - 100) {
                    const items = container.querySelectorAll(".skill-item");
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add("pop-out");
                        }, index * 100); // Delay each item animation
                    });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section style={skillsSectionStyle}>
            <div style={headerStyle}>
                <h2 style={skillsTitleStyle}>Skills</h2>
            </div>
            <div ref={skillsContainerRef} style={skillsContainerStyle}>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://www.iconsdb.com/icons/preview/red/active-search-2-xxl.png"
                        alt="Skill 1"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>Local/Global SEO</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://www.iconsdb.com/icons/preview/red/website-optimization-2-xxl.png"
                        alt="Skill 2"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>Fullstack Website Development</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://www.iconsdb.com/icons/preview/persian-red/app-store-2-xxl.png"
                        alt="Skill 3"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>Fullstack App Development</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://openclipart.org/image/800px/290238"
                        alt="Skill 4"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>AI/ML solutions</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://www.iconsdb.com/icons/preview/red/cloud-4-xxl.png"
                        alt="Skill 1"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>Cloud Computing</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://cdn3.iconfinder.com/data/icons/basicolor-file-types/24/140_js_javascript_code-1024.png"
                        alt="Skill 2"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>JavaScript</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://minio.codingblocks.com/amoeba/9c06343d-0b57-4194-85f6-c74352a0047d.png"
                        alt="Skill 3"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>React.js</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://minio.codingblocks.com/amoeba/9c06343d-0b57-4194-85f6-c74352a0047d.png"
                        alt="Skill 4"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>React Native</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-1024.png"
                        alt="Skill 1"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>Node.js</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                        alt="Skill 2"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>Next.js</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://cdn.icon-icons.com/icons2/171/PNG/512/css_23404.png"
                        alt="Skill 3"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>CSS</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://icones.pro/wp-content/uploads/2021/05/icone-html-rouge-300x300.png"
                        alt="Skill 4"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>HTML</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://www.iconsdb.com/icons/preview/red/python-xxl.png"
                        alt="Skill 2"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>Python</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="http://www.clker.com/cliparts/K/t/P/G/u/v/gear-red-md.png"
                        alt="Skill 3"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>Website Optimization</p>
                </div>
                <div className="skill-item" style={skillItemStyle}>
                    <Image
                        src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/14_2-512.png"
                        alt="Skill 4"
                        width={40}
                        height={40}
                        style={skillIconStyle}
                    />
                    <p style={skillTextStyle}>Google My Business</p>
                </div>
            </div>
            <style jsx>{`
                @keyframes popOut {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }

                .pop-out {
                    animation: popOut 0.5s ease-in-out;
                    opacity: 1;
                }

                .skill-item {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}

const skillsSectionStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#111', // Dark background
    color: '#fff', // White text
    textAlign: 'left', // Align text to the left
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
};

const skillsTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#E11D48', // Bold red color for the title
    position: 'relative',
    paddingBottom: '0.5rem',
    marginLeft: '1rem',
    '::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: '2px',
        width: '50px', // Underline from a longer distance
        backgroundColor: '#E11D48', // Red underline
    }
};

const skillsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
};

const skillItemStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1D1D1D', // Slightly lighter dark background for skill items
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow for a polished look
    transform: 'scale(1)',
    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
};

const skillIconStyle = {
    marginRight: '1rem',
};

const skillTextStyle = {
    fontSize: '20px',
    fontWeight: 'normal',
};