import { motion } from 'framer-motion';
import { timelineData } from '../constants'; // Your data

const Timeline = () => {
    return (
        <div className="mt-5 space-y-10 px-4 lg:px-8 max-w-7xl mx-auto">
            {timelineData.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-8 bg-white border  rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }} // triggers animation when 20% of the element is in view
                >
                    {/* Content and Image are inside the same div */}

                    {/* Content on the left */}
                    <div className="lg:w-2/3 text-center lg:text-left mb-4 lg:mb-0">
                        <div className="flex items-center justify-center lg:justify-start  mb-2">
                            <h3 className="text-lg lg:text-2xl text-secondary text-center lg:text-left font-semibold">{item.title}</h3>
                        </div>

                        <p className="text-gray-600">{item.description}</p>
                    </div>

                    {/* Image on the right */}
                    <div className="lg:w-1/3 flex justify-center lg:justify-end">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-36 h-36 lg:w-48 lg:h-48"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
