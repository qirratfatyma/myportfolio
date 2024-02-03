import GoToTop from "../../assets/GoToTop/GoToTop";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Experiences from "../Experiences/Experiences";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";
import Pricing from "../Pricing/Pricing";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div className="bg-[#CACAEE]" >
            <GoToTop></GoToTop>
            <Banner></Banner>
            <About></About>
            <Experiences></Experiences>
            <Services></Services>
            <Projects></Projects>
            <Testimonial></Testimonial>
            <Pricing></Pricing>
            <Blogs></Blogs>
            <Newsletter></Newsletter>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;