import { motion } from "framer-motion";
import { useState } from "react";

const ParallaxPage = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    const handleStart = () => {
        setStartAnimation(true);
    };

    return (
        <div className="relative h-svh overflow-hidden bg-custom-gradient">
            {/* Background Clouds */}
            <div className="relative w-full h-52">
                <motion.div
                    initial={{ y: 0 }}
                    animate={startAnimation ? { y: "-10%" } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-28 w-2/4 h-full bg-[url('/svg/cloud1.svg')] bg-contain bg-no-repeat object-contain z-10 opacity-50"
                />
            </div>

            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-15%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-1/4 top-10 w-1/4 h-full bg-[url('/svg/cloud2.svg')] bg-contain bg-no-repeat object-contain z-10 opacity-50"
            />

            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-20%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-2/4 top-80 w-1/4 h-full bg-[url('/svg/cloud3.svg')] bg-contain bg-no-repeat object-contain opacity-50 z-30"
            />

            <motion.div
                style={{ width: '600px', left: '1340px' }}
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-25%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-32 h-full bg-[url('/svg/cloud4.svg')] bg-contain bg-no-repeat object-contain opacity-40 z-40"
            />

            {/* Mountain Layers */}
            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-5%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-2/4 w-full h-full bg-[url('/svg/mountain1.svg')] bg-contain bg-no-repeat object-contain z-50"
            />

            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-20%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-40 top-60 w-full h-full bg-[url('/svg/mountain4.svg')] bg-contain bg-no-repeat object-contain opacity-50 z-80"

            />

            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-10%", opacity: startAnimation ? 0 : 0.4 } : { opacity: 0.8 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-6 top-80 w-full h-full bg-[url('/svg/mountain2.svg')] bg-contain bg-no-repeat object-contain opacity-80 z-60"
            />

            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-15%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -left-40 top-96 w-full h-full bg-[url('/svg/mountain3.svg')] bg-contain bg-no-repeat object-contain opacity-80 z-70"

            />

            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-25%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-0 w-full h-full bg-[url('/mountain5.png')] bg-cover z-90"
            />
            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-30%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-0 w-full h-full bg-[url('/mountain6.png')] bg-cover z-100"
            />
            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-35%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-0 w-full h-full bg-[url('/mountain7.png')] bg-cover z-110"
            />
            <motion.div
                initial={{ y: 0 }}
                animate={startAnimation ? { y: "-40%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-0 w-full h-full bg-[url('/mountain8.png')] bg-cover z-120"
            />

            {/* Logo */}
            {/* <motion.div
                initial={{ scale: 1 }}
                animate={startAnimation ? { scale: 1.5, y: "-50%" } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-130"
            >
                <img src="/svg/logo.svg" alt="Logo" className="w-40 h-40" />
            </motion.div> */}

            {/* Button */}
            {/* {!startAnimation && (
                <button
                    onClick={handleStart}
                    className="absolute bottom-20 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-red-600 text-white rounded-md shadow-lg z-140"
                >
                    Let's Start
                </button>
            )} */}

            {/* Text */}
            {/* <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold z-130"
            >
                MUCH MORE THAN
            </motion.div> */}
        </div>
    );
};

export default ParallaxPage;
