import { motion } from 'framer-motion';
import img1 from '../assets/images/smiley-woman-holding-book-front-view.jpg';
import img2 from '../assets/images/international-day-education-celebration.jpg';

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative p-8 lg:p-20 bg-white" >
        {/* Background image with reduced height for small screens */}
        <div className="absolute inset-0 h-[322px] lg:hidden">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: '50% 30%' // Custom object-position equivalent for background images
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Gradient overlay */}
        </div>


        {/* Text overlay for small screens */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white lg:hidden h-48">
          <h1 className="text-3xl mt-44 font-semibold">
            <span className="text-yellow-400">H</span>iring Simplified.
          </h1>

        </div>

        {/* Main Title for larger screens */}
        

        <div className="flex flex-col lg:flex-row justify-between items-center pt-8">
          <div className="lg:w-1/2 mb-10 lg:mb-0 mt-72 lg:mt-0">
            <h1 className="hidden lg:block text-4xl mt-8 lg:text-5xl font-normal text-primary text-center lg:text-left mb-10">
              <span className="text-yellow-400">H</span>iring Simplified.
            </h1>
            <p className="text-gray-600 text-lg">
              At Hiring Ring LLP, we don't just fill positions we build careers and craft opportunities. As a premier recruitment agency, our mission is to connect the right talent with the right roles, empowering businesses to thrive and professionals to achieve their career aspirations.
            </p>
          </div>

          {/* Images section with no padding */}
          <div className="flex flex-wrap gap-3 lg:gap-5 justify-center lg:justify-end lg:opacity-100 lg:z-10 lg:flex-row lg:mr-0">
            <motion.img
              src={img1}
              alt="Person 1"
              className="hidden lg:block w-[300px] h-auto object-cover" // Increased width
              loading="lazy"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.img
              src={img2}
              alt="Person 2"
              className="hidden lg:block w-[300px] h-auto object-cover" // Increased width
              loading="lazy"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
