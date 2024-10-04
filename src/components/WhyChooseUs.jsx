import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import { WhyChooseUsData } from '../constants';

const WhyChooseUs = () => {
  return (
    <div className="p-8 lg:p-20 bg-white">
      <motion.h3
        className="text-2xl font-semibold text-secondary mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Why Choose <br /> Us?
      </motion.h3>
      
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}  // Autoplay functionality

        modules={[Navigation, Pagination, Autoplay]}  // Use the required modules
        className="mySwiper"
      >
        {WhyChooseUsData.map((data, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="card py-3 sm:py-4 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="text-3xl mb-4">{data.icon}</div>
              <h1 className="text-lg text-secondary font-semibold mb-2">{data.name}</h1>
              <p className="text-gray-600">{data.desc}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyChooseUs;
