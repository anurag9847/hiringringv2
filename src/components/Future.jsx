
import { motion } from 'framer-motion';
import BgImg from '../assets/images/silhouette-successful-male-standing-window-overlooking-island-manhattan.jpg';

const Future = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <>
            <motion.div
                className='p-8 lg:p-20 bg-white'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={textVariants}
            >
                <h1 className='text-4xl lg:text-5xl font-bold text-primary text-center lg:text-left mb-10'>
                    Let’s build the future together
                </h1>
                <p className='text-gray-600 text-lg'>
                    Whether you’re a company looking to grow your team or a professional seeking your next
                    opportunity,<br /> Hiring Ring is here to help. Let’s connect and take the next
                    step toward a brighter future.
                </p>
            </motion.div>
            
            <motion.img
                src={BgImg}
                alt="Future vision"
                className='h-[250px] w-full object-cover'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants}
            />
        </>
    );
}

export default Future;
