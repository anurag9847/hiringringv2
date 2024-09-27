import { motion } from 'framer-motion';
import { WhyChooseUsData } from '../constants';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const WhyChooseUs = () => {
  return (
    <div className="p-8 lg:p-20 bg-white">
      <motion.h3
        className="text-2xl font-semibold text-secondary mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Why Choose <br /> Us?
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {WhyChooseUsData.map((data, index) => (
          <motion.div
            key={index}
            className="card py-3 sm:py-4 p-4"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
          >
            <div className="text-3xl mb-4">{data.icon}</div>
            <h1 className="text-lg text-secondary font-semibold mb-2">{data.name}</h1>
            <p className="text-gray-600">{data.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
