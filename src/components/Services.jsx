import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ServicesData } from '../constants';

const ServiceCard = React.memo(({ icon, name, desc }) => (
    <div className="card py-3 sm:py-4 p-4">
        <div className="text-3xl mb-4">{icon}</div>
        <h1 className="text-lg text-secondary font-semibold mb-2">{name}</h1>
        <p className="text-gray-600">{desc}</p>
    </div>
));

const Services = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.3 } }
    };

    const renderCard = useCallback((data, index) => (
        <ServiceCard key={index} icon={data.icon} name={data.name} desc={data.desc} />
    ), []);

    return (
        <>
            <div
                className="p-8 lg:p-20 bg-white"
                id='service'
                
            >
                <motion.h3
                    className='text-2xl font-semibold text-secondary mb-2'
                    variants={cardVariants}
                >
                    Our Services
                </motion.h3>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
                    
                    
                >
                    {ServicesData.map(renderCard)}
                </div>
            </div>
        </>
    );
}

export default Services;
