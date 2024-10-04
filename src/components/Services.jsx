import React, { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';  // Import necessary modules
import { ServicesData } from '../constants';
import { motion } from 'framer-motion';

const ServiceCard = React.memo(({ icon, name, desc }) => (
    <div className="card py-3 sm:py-4 p-4">
        <div className="text-3xl mb-4">{icon}</div>
        <h1 className="text-lg text-secondary font-semibold mb-2">{name}</h1>
        <p className="text-gray-600">{desc}</p>
    </div>
));

const Services = () => {
    const renderCard = useCallback((data, index) => (
        <SwiperSlide key={index}>
            <motion.div
                className="card py-3 sm:py-4 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <ServiceCard icon={data.icon} name={data.name} desc={data.desc} />
            </motion.div>
        </SwiperSlide>
    ), []);

    return (
        <div className="p-8 lg:p-20 bg-white" id="service">
            <motion.h3
                className="text-2xl font-semibold text-secondary mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Our Services
            </motion.h3>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}  // Auto slide feature
                modules={[Navigation, Pagination, Autoplay]}  // Add Swiper modules
                className="mySwiper"
            >
                {ServicesData.map(renderCard)}
            </Swiper>
        </div>
    );
};

export default Services;
