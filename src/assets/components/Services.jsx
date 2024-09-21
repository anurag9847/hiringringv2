import React from 'react'
import { motion } from 'framer-motion';
import { ServicesData } from '../constants'

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Services = () => {
    return (
        <>


            <motion.div
                className="p-8 lg:p-20 bg-white"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.6 }}
                id='service'
            >
                <h3 className='text-2xl font-semibold text-secondary mb-2'>Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {ServicesData.map((data, index) => (
                        <div
                            key={index}
                            className="card py-3 sm:py-4 p-4"
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
                        >
                            <div className="text-3xl mb-4">{data.icon}</div>
                            <h1 className="text-lg  text-secondary font-semibold mb-2">{data.name}</h1>
                            <p className="text-gray-600">{data.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    )

}

export default Services
