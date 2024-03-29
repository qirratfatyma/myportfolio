import about from '../../assets/img/about1.png'
import about2 from '../../assets/img/about-shape.svg'
import { IoMdPlay } from "react-icons/io";
import './About.css'
import { MdKeyboardArrowRight } from 'react-icons/md';

const About = () => {
    return (
        <div className='lg:px-28 md:px-20 sm:px-12 px-10 lg:py-32 xl:py-32 pb-8 lg:pb-0' id="about">
            <div className="grid lg:grid-cols-2 gap-16">

                <div className='flex items-center justify-center xl:block relative'>
                    <div 
                    
                    className='relative'>
                        <img className='rounded z-10 relative' src={about} alt="" />
                        <div className='play_btn  py-5 px-5 rounded-full text-[#fff] bg-[#EDCEAB] text-2xl inline-block text-center cursor-pointer'>
                            <span><IoMdPlay /></span>
                        </div>
                    </div>
                    <div className='hidden absolute xl:block left-[-10vh] bottom-[-12vh]'>
                        <img src={about2} alt="" />
                    </div>
                </div>

                <div className='space-y-2 mt-6'>
                    <p className='text-[#EDCEAB] font-medium uppercase'>About Me</p>
                    <h2 className='lg:text-4xl md:text-4xl sm:text-3xl leading-tight text-2xl font-extrabold text-[#ffffff]  uppercase'>Failure is the condiment That Gives <span className='text-[#EDCEAB]'>Success</span></h2>
                    <p className='text-[#ffffff] py-3'>
                    I specialize in creating responsive and user-friendly websites, utilizing my skills in HTML, CSS, JavaScript and React. With a keen eye for design and a passion for clean, efficient code, I am dedicated to delivering seamless web experiences that meet both client and user expectations. Experienced in front-end development and well-versed in various frameworks, I am committed to staying updated with the latest technologies to ensure cutting-edge and innovative web solutions.
                    </p>

                    <button className='bg-[#EDCEAB] hover:bg-[#EDCEAB88] duration-300 text-[#ffffff] text-center px-6 py-3 rounded font-medium flex items-center justify-center space-x-4'><span>DOWNLOAD CV</span>  <span className='text-[#EDCEAB] py-2 px-2 bg-[#ffffff] rounded'><MdKeyboardArrowRight /></span></button>
                </div>

            </div>
        </div>
    );
};

export default About;