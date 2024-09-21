import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../images/smiley-woman-holding-book-front-view.jpg';
import img2 from '../images/international-day-education-celebration.jpg';

const Hero = () => {
  const leftVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: { x: 0, opacity: 1 }
  };

  const rightVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: { x: 0, opacity: 1 }
  };

  return (
    <div className="p-8 lg:p-20 bg-white" id="hero">
      {/* Main Heading */}
      <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ type: "spring", stiffness: 30 }}
        variants={leftVariants}
        className="text-4xl lg:text-5xl font-bold text-primary text-center lg:text-left mb-10"
      >
        Professional Job Consultancy
      </motion.h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center pt-8">
        {/* Left Section: Subheading and Description */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: "spring", stiffness: 30 }}
          variants={leftVariants}
          className="lg:w-1/2 mb-10 lg:mb-0"
        >
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Elevate Hiring Process With Hiring Ring
          </h2>
          <p className="text-gray-600 text-lg">
            At Hiring Ring LLP, we don't just fill positions; we build careers and craft opportunities. As a premier recruitment agency, our mission is to connect the right talent with the right roles, empowering businesses to thrive and professionals to achieve their career aspirations.
          </p>
        </motion.div>

        {/* Right Section: Images */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: "spring", stiffness: 30 }}
          variants={rightVariants}
          className="flex flex-wrap gap-3 lg:gap-5 justify-center lg:justify-start"
        >
          <img
            src={img1} 
            alt="Person 1"
            className="w-full sm:w-[45%] lg:w-[250px] h-auto object-cover"
          />
          <img
            src={img2}
            alt="Person 2"
            className="w-full sm:w-[45%] lg:w-[250px] h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
