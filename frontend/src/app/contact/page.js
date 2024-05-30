import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from 'next/dynamic';

const CalendlyInline = dynamic(() => import('../components/CalendlyInline'), {
  ssr: false,
});

export default function Contact() {
    return (
        <div>
            <Header/>
            <section style={sectionStyle} className="mt-20">
                <div style={headerStyle}>
                    <h2 style={titleStyle}>Contact Us</h2>
                </div>
                <div style={contentStyle}>
                    <div style={contentItemStyle}>
                        <h3 style={subtitleStyle}>Get in Touch</h3>
                        <p style={textStyle}>
                            We would love to hear from you! Whether you have a question about our services, need assistance, or you&apos;re ready to start a new project, our team is here to help. Reach out to us through any of the methods below, and we&apos;ll get back to you as soon as possible.
                        </p>
                        <div style={contactDetailsStyle}>
                            <div style={contactDetailItemStyle}>
                                <h4 style={contactDetailTitleStyle}>Phone</h4>
                                <p style={contactDetailTextStyle}>+1 (317)-789-5564</p>
                            </div>
                            <div style={contactDetailItemStyle}>
                                <h4 style={contactDetailTitleStyle}>Email</h4>
                                <p style={contactDetailTextStyle}>alexlotkov124@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <CalendlyInline />
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

const contactDetailsStyle = {
    display: 'grid',
    gap: '1.5rem',
};

const contactDetailItemStyle = {
    backgroundColor: '#303030', // Slightly lighter dark background
    padding: '1rem',
    borderRadius: '10px',
};

const contactDetailTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
};

const contactDetailTextStyle = {
    fontSize: '1.2rem',
};

const formContainerStyle = {
    backgroundColor: '#202020', // Dark background for the form
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a polished look
};

const formTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
};

const formStyle = {
    display: 'grid',
    gap: '1.5rem',
};

const formGroupStyle = {
    display: 'grid',
    gap: '0.5rem',
};

const labelStyle = {
    fontSize: '1.2rem',
};

const inputStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#303030', // Slightly lighter dark background for input
    color: '#FCFCFC', // Light text
};

const textareaStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#303030', // Slightly lighter dark background for textarea
    color: '#FCFCFC', // Light text
    resize: 'vertical',
};

const buttonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#E11D48', // Red background for button
    color: '#FCFCFC', // Light text
    cursor: 'pointer',
};