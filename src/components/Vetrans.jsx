import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/images/environmental-pollution-factory-exterior-night.jpg';
import img2 from '../assets/images/portrait-elegant-old-man (1).jpg';

const Vetrans = () => {
    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className="p-8 lg:p-20 bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-center pt-8">
                <div className="flex flex-wrap gap-3 lg:gap-5 justify-center lg:justify-start">
                    <motion.img
                        src={img1}
                        alt="Person 1"
                        loading="lazy"
                        className="w-full sm:w-[45%] lg:w-[250px] h-auto lg:h-[440px] object-cover"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    />
                    <motion.img
                        src={img2}
                        alt="Person 2"
                        loading="lazy"
                        className="w-full sm:w-[45%] lg:w-[250px] h-auto object-cover"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </div>
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-primary text-center lg:text-left mb-10"
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        A Team Of <br />Industry<br />Veterans
                    </motion.h2>
                    <p className="text-gray-600 text-lg">
                        At Hiring Ring LLP, we pride ourselves on the strength and expertise of our leadership team.
                        Our partners bring decades of experience in recruitment, talent acquisition, and human
                        resources, ensuring that our clients receive unparalleled service and results.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Vetrans;
