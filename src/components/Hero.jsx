import { motion } from 'framer-motion';
import img1 from '../assets/images/smiley-woman-holding-book-front-view.jpg';
import img2 from '../assets/images/international-day-education-celebration.jpg';

const Hero = () => {
  return (
    <div className="p-8 lg:p-20 bg-white" id="hero">
      <h1 className="text-4xl lg:text-5xl font-bold text-primary text-center lg:text-left mb-10">
        Professional Job Consultancy
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center pt-8">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Elevate Hiring Process With Hiring Ring
          </h2>
          <p className="text-gray-600 text-lg">
            At Hiring Ring LLP, we don't just fill positions; we build careers and craft opportunities. As a premier recruitment agency, our mission is to connect the right talent with the right roles, empowering businesses to thrive and professionals to achieve their career aspirations.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:gap-5 justify-center lg:justify-start">
          <motion.img
            src={img1}
            alt="Person 1"
            className="w-full sm:w-[45%] lg:w-[250px] h-auto object-cover"
            loading="lazy"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.img
            src={img2}
            alt="Person 2"
            className="w-full sm:w-[45%] lg:w-[250px] h-auto object-cover"
            loading="lazy"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
