"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
    const holder = "->";
    return (
        <section style={blogSectionStyle}>
            <div style={headerStyle}>
                <div>
                    <h2 style={blogTitleStyles} className='font-bold'>Latest Blog Posts</h2>
                    <p style={subTitleStyle}>My recent posts</p>
                </div>
            </div>
            <div style={blogsContainerStyle}>
                <div style={blogItemStyle}>
                    <div style={blogImageContainerStyle}>
                        <Image
                            src="/path/to/your/blog1.jpg" // Replace with the actual path to your blog image
                            alt="Blog 1"
                            layout="responsive"
                            width={400}
                            height={200}
                            style={blogImageStyle}
                        />
                    </div>
                    <h3 style={blogTitleStyle}>What it takes to release an app on the App Store in 2024</h3>
                    <p style={blogDescriptionStyle}>What it took to release my first app 6 months ago</p>
                    <Link href="/blog/blog1"><p style={learnMoreStyle}>More {holder}</p></Link>
                </div>
                <div style={blogItemStyle}>
                    <div style={blogImageContainerStyle}>
                        <Image
                            src="/path/to/your/blog2.jpg" // Replace with the actual path to your blog image
                            alt="Blog 2"
                            layout="responsive"
                            width={400}
                            height={200}
                            style={blogImageStyle}
                        />
                    </div>
                    <h3 style={blogTitleStyle}>How to do Local SEO as a local business 2024</h3>
                    <p style={blogDescriptionStyle}>A tutorial on how local businesses should do Local SEO</p>
                    <Link href="/blog/blog2"><p style={learnMoreStyle}>More {holder}</p></Link>
                </div>
                <div style={blogItemStyle}>
                    <div style={blogImageContainerStyle}>
                        <Image
                            src="/path/to/your/blog3.jpg" // Replace with the actual path to your blog image
                            alt="Blog 3"
                            layout="responsive"
                            width={400}
                            height={200}
                            style={blogImageStyle}
                        />
                    </div>
                    <h3 style={blogTitleStyle}>Google my Business for small businesses 2024</h3>
                    <p style={blogDescriptionStyle}>What are the best Google my Business practices?</p>
                    <Link href="/blog/blog3"><p style={learnMoreStyle}>More {holder}</p></Link>
                </div>
            </div>
            <Link href="/blog">
                <p style={viewAllStyle}>More Blogs</p>
            </Link>
        </section>
    );
}

const blogSectionStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#0B0B0B', // Dark background
    color: '#fff', // White text
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
};

const blogTitleStyles = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
};

const subTitleStyle = {
    fontSize: '1rem',
    color: '#E1DFDF', // Lighter text for subtitle
};

const blogsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
};

const blogItemStyle = {
    backgroundColor: '#1D1D1D', // Slightly lighter dark background for blog items
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow for a polished look
};

const blogImageContainerStyle = {
    overflow: 'hidden',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
};

const blogImageStyle = {
    width: '100%',
    height: 'auto',
};

const blogTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    marginBottom: '0.5rem',
};

const blogDescriptionStyle = {
    fontSize: '1rem',
    marginBottom: '0.5rem',
};

const learnMoreStyle = {
    fontSize: '1rem',
    color: '#E11D48', // Red color for Learn More link
    textDecoration: 'none',
    fontWeight: 'bold',
};

const viewAllStyle = {
    display: 'inline-block',
    marginTop: '2rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#E11D48', // Tailwind CSS red-600
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
};