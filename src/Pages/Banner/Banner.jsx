import Navbar from '../Navbar/Navbar';
import './Banner.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import author from '../../assets/img/author.png'


const Banner = () => {
    return (
        <div id='home'>
            <div className='banner_bg lg:px-28 md:px-20 sm:px-12 px-10 overflow-hidden'>
                <Navbar></Navbar> 
 
                <div className='grid lg:grid-cols-2 gap-4 relative'>

                    <div className='lg:py-40 py-12 flex items-center justify-center flex-col lg:block text-center lg:text-start'>
                        <h2  className='text-[#ffffff] lg:text-5xl md:text-5xl sm:text-4xl text-2xl font-extrabold uppercase banner_head'>
                            Imagination <span>is more important than knowledge</span>
                        </h2>
                        <p className='text-[#ffffff] my-8 text-xl banner_subTitle'>
                            Together we  achieve more than a single person <br></br>could ever do alone.
                        </p>
                        <button className='bg-[#800020] hover:bg-[#80002088] duration-300 text-[#ffffff] text-center px-6 py-3 rounded font-medium flex items-center justify-center space-x-4'><span>Getting Started</span>  <span className='text-[#800020] py-2 px-2 bg-[#ffffff] rounded'><MdKeyboardArrowRight /></span></button>
                    </div>

                    <div className='right-0 bottom-[-20vh] absolute hidden lg:block'>
                           <img src={author} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;