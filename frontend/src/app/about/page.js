import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from 'next/dynamic';

const CalendlyInline = dynamic(() => import('../components/CalendlyInline'), {
  ssr: false,
});

export default function About() {
    return (
        <div>
            <Header />
            <section className="mt-16" style={sectionStyle}>
                <div style={headerStyle}>
                    <h2 style={titleStyle}>About Us</h2>
                </div>
                <div style={contentStyle}>
                    <div style={contentItemStyle}>
                        <h3 style={subtitleStyle}>Our Mission</h3>
                        <p style={textStyle}>
                            Our mission is simple: to provide top-quality digital solutions that drive success for our clients. We believe in the power of technology to transform businesses and create opportunities for growth. Whether you&apos;re a small business looking to establish an online presence or a large corporation seeking to optimize your digital strategy, we are here to help you every step of the way.
                        </p>
                    </div>
                    <div style={contentItemStyle}>
                        <h3 style={subtitleStyle}>Our Values</h3>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                <strong>Innovation:</strong> We are committed to staying ahead of the curve by constantly exploring new technologies and methodologies. Our innovative approach ensures that we deliver solutions that are not only effective but also future-proof.
                            </li>
                            <li style={listItemStyle}>
                                <strong>Quality:</strong> Quality is at the heart of everything we do. From the initial consultation to the final delivery, we maintain the highest standards to ensure that our clients receive the best possible service.
                            </li>
                            <li style={listItemStyle}>
                                <strong>Customer-Centric:</strong> Our clients are our top priority. We take the time to understand your unique needs and tailor our solutions to meet your specific requirements. Your success is our success.
                            </li>
                            <li style={listItemStyle}>
                                <strong>Integrity:</strong> We believe in building long-term relationships based on trust and transparency. We are committed to honesty and integrity in all our dealings.
                            </li>
                        </ul>
                    </div>
                    <div style={contentItemStyle}>
                        <h3 style={subtitleStyle}>Why Choose Us?</h3>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                <strong>Tailored Solutions:</strong> We understand that every business is unique. We offer customized solutions that are designed to meet your specific needs and goals.
                            </li>
                            <li style={listItemStyle}>
                                <strong>Proven Results:</strong> Our track record speaks for itself. We have helped numerous businesses achieve their digital goals and drive success through our comprehensive services.
                            </li>
                            <li style={listItemStyle}>
                                <strong>Ongoing Support:</strong> Our commitment to you doesn&apos;t end with the completion of your project. We offer ongoing support and maintenance to ensure that your digital solutions continue to perform optimally.
                            </li>
                        </ul>
                    </div>
                    <CalendlyInline />
                    <div style={contentItemStyle}>
                        <h3 style={subtitleStyle}>Get in Touch</h3>
                        <p style={textStyle}>
                            We would love to hear from you! Whether you have a question about our services or you&apos;re ready to start a new project, our team is here to help. Contact us today to learn more about how we can support your business.
                        </p>
                        <p style={contactDetailStyle}>Phone: +1(317)789-5564</p>
                        <p style={contactDetailStyle}>Email: alexlotkov124@gmail.com</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

const sectionStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#111', // Dark background
    color: '#FCFCFC', // Light text
    textAlign: 'left',
};

const headerStyle = {
    marginBottom: '2rem',
};

const titleStyle = {
    fontSize: '2.5rem',
    color: '#E11D48', // Red color for the title
    fontWeight: 'bold',
    paddingBottom: '0.5rem',
};

const contentStyle = {
    display: 'grid',
    gap: '2rem',
};

const contentItemStyle = {
    backgroundColor: '#202020', // Dark background for each section
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a polished look
};

const subtitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
};

const textStyle = {
    fontSize: '1.2rem',
    marginBottom: '1rem',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

const listItemStyle = {
    marginBottom: '1rem',
};

const contactDetailStyle = {
    fontSize: '1.2rem',
    color: '#E11D48', // Red color for contact details
};