import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import PortfolioHero from "../components/PortfolioHero";
import Portfolio from "../components/Portfolio";
import dynamic from 'next/dynamic';

const CalendlyInline = dynamic(() => import('../components/CalendlyInline'), {
  ssr: false,
});

export default function PortfolioHome() {
    return (
        <div className="bg-black">
            <Header />
            <PortfolioHero />
            <Portfolio/>
            <section style={skillsStyle}>
                <Skills />
            </section>
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