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
        <div className="relative">
            {/* Text for large screens (hidden on small screens) */}
            <motion.div
                className="p-8 lg:p-20 bg-white hidden lg:block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={textVariants}
            >
                <h1 className="text-4xl lg:text-5xl font-normal text-primary text-left mb-10">
                    Let’s build the future together
                </h1>
                <p className="text-gray-600 text-lg text-left">
                    Whether you’re a company looking to grow your team or a professional seeking your next
                    opportunity,<br /> Hiring Ring is here to help. Let’s connect and take the next
                    step toward a brighter future.
                </p>
            </motion.div>

            {/* Image with text and paragraph overlay on small screens */}
            <motion.div
                className="relative w-full h-[250px] lg:h-[300px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants}
            >
                <motion.img
                    src={BgImg}
                    alt="Future vision"
                    className="h-full w-full object-cover"
                />

                {/* Text and paragraph overlay (visible only on small screens) */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center lg:hidden bg-black/40 px-4">
                    <h1 className="text-3xl font-semibold text-white mb-4">
                        Let’s build the future together
                    </h1>
                    <p className="text-white text-sm">
                        Whether you’re a company looking to grow your team or a professional seeking your next
                        opportunity, Hiring Ring is here to help. Let’s connect and take the next step toward a
                        brighter future.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default Future;
