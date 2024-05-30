import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import PortfolioHero from "../components/PortfolioHero";
import Portfolio from "../components/Portfolio";
import CalendlyInline from "../components/CalendlyInline";

export default function PortfolioHome() {
    return (
        <div className="bg-black">
            <Header />
            <PortfolioHero />
            <Portfolio/>
            <section style={skillsStyle}>
                <Skills />
            </section>
            <section style={testimonialsStyle}>
                <h2 style={{fontSize: '40px', fontWeight: '700', marginBottom: '20px'}} className="text-red-700">Testimonials</h2>
                <div style={testimonialsContainerStyle} className="md:flex lg:flex">
                    <div style={testimonialItemStyle}>
                        <p>"Working with Alex was a fantastic experience. He developed a custom AI Task Manager App for our team, which has dramatically improved our productivity. Alex's attention to detail and ability to deliver exactly what we needed were exceptional."</p>
                        <p>- Sarah, Small Business Owner</p>
                    </div>
                    <div style={testimonialItemStyle}>
                        <p>"I highly recommend Alex for any web development project. He created a sophisticated online code editor website for our development team that supports multiple programming languages. This tool has become an essential part of our daily workflow, enabling our team to code and share projects seamlessly. Alex's technical expertise and innovative approach made this project a huge success."</p>
                        <p>- David, Software Developer</p>
                    </div>
                    <div style={testimonialItemStyle}>
                        <p>"Alex's work on our real estate website was outstanding. He built a comprehensive platform that allows users to search for properties, view detailed listings, and connect with real estate agents effortlessly. The site's clean design and user-friendly interface have received rave reviews from our clients. Alex's ability to understand our requirements and deliver a top-notch solution was truly impressive."</p>
                        <p>- Michael, Real Estate Agent</p>
                    </div>
                </div>
            </section>
            <CalendlyInline/>
            <Footer />
        </div>
    );
}

const skillsStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#111',
    color: '#FCFCFC'
};

const testimonialsStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#0C0C0C',
    color: '#FCFCFC'
};

const testimonialsContainerStyle = {
    gridTemplateColumns: '1fr',
    gap: '2rem'
};

const testimonialItemStyle = {
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    padding: '2rem',
    borderRadius: '10px',
    backgroundColor: '#202020',
    transition: 'transform 0.3s',
    transform: 'perspective(1000px) rotateY(0deg)',
    cursor: 'pointer',
    color: '#FCFCFC',
    marginTop: '10px'
};

const ctaStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#111',
    textAlign: 'center',
    color: '#FCFCFC'
};

const ctaFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    maxWidth: '600px',
    margin: '0 auto'
};

const ctaInputStyle = {
    width: '100%',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#202020',
    color: '#FCFCFC'
};

const ctaTextareaStyle = {
    width: '100%',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#202020',
    color: '#FCFCFC',
    height: '150px'
};

const ctaButtonStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#E11D48',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};