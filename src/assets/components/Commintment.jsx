import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../images/photorealistic-law-environment.jpg';

const Commitment = () => {
  // Define the variants for the fade-in effect
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 },delay: 0.8 }
  };

  return (
    <div className="relative text-white text-center p-5 md:p-12 lg:p-20 h-[250px]"
         style={{ 
           backgroundImage: `url(${backgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="px-5 sm:px-10 md:px-20 lg:px-40"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Commitment</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            At Hiring Ring LLP, we are committed to excellence in every aspect of recruitment. Our team of
            dedicated professionals works tirelessly to ensure that we not only meet but exceed your
            expectations. We believe in building lasting relationships with both our clients and candidates,
            founded on trust, transparency, and mutual success.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Commitment;
