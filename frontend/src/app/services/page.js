import ServicesHero from "../components/ServicesHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurPackages from "../components/OurPackages";
import IndividualServices from "../components/IndividualServices";

export default function ServicesPage(){
    return(
        <div>
            <Header/>
            <ServicesHero/>
            <OurPackages />
            <IndividualServices/>
            <Footer />
        </div>
    );
}