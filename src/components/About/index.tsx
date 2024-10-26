import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const slideInLeft = {
    hidden: { opacity: 0, x: 100 }, // Start from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: -100 }, // Start from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <div ref={ref} id="about" className="h-screen w-full flex items-center pt-[6rem] mb-[6rem]">
      <div className="max-w-[75rem] lg:h-[38rem] py-9 mx-auto w-full px-6 lg:px-10 flex gap-8 sm:gap-[4rem] md:gap-[6.3rem] flex-col lg:flex-row items-center">
        
        {/* Left Section: Image with Slide-in Animation from Right */}
        <motion.div
          className="lg:max-w-[25rem] w-full lg:h-full h-[400px] sm:h-[500px] md:h-[600px] shadow-me"
          variants={slideInRight}
          initial="hidden"
          animate={controls}
        >
          <img
            src="images/1.jpg"
            alt="About Me"
            className="w-full h-full object-cover rounded"
          />
        </motion.div>

        {/* Right Section: About Info with Slide-in Animation from Left */}
        <motion.div
          className="w-full lg:max-w-[39rem]"
          variants={slideInLeft}
          initial="hidden"
          animate={controls}
        >
          <h1 className="text-3xl font-bold mb-5 sm:mb-6 text-black">
            ABOUT <span className="text-[#e54b4b]">ME</span>
          </h1>
          <p className="text-[#767676] mb-5 sm:mb-6 text-sm tracking-[1px] leading-7 sm:leading-8 md:leading-9">
            Hello! I'm Alan Walker. I'm a web developer, and I'm very passionate
            and dedicated to my work. With 20 years experience as a professional
            web developer, I have acquired the skills and knowledge necessary to
            make your project a success. I enjoy every step of the design
            process, from discussion and collaboration.
          </p>

          {/* Skills */}
          <div className="grid md:grid-cols-two-col w-3/4 lg:w-full gap-4 mb-6">
            <div className="flex items-center text-sm sm:text-lg font-semibold text-black">
              <FontAwesomeIcon icon={faAnglesRight as IconProp} className="mr-2" />
              Web Development
            </div>
            <div className="flex items-center text-sm sm:text-lg font-semibold text-black">
              <FontAwesomeIcon icon={faAnglesRight as IconProp} className="mr-2" />
              Search Engine Optimization
            </div>
            <div className="flex items-center text-sm sm:text-lg font-semibold text-black">
              <FontAwesomeIcon icon={faAnglesRight as IconProp} className="mr-2" />
              Social Media Marketing
            </div>
            <div className="flex items-center text-sm sm:text-lg font-semibold text-black">
              <FontAwesomeIcon icon={faAnglesRight as IconProp} className="mr-2" />
              Content Generation
            </div>
          </div>

          {/* Download CV Button */}
          <Link to="/files/Elnar-Zulfugarov-CV.pdf" target="_blank" download>
            <motion.button
              className="bg-[#e54b4b] border-2 border-[#e54b4b] text-white px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 rounded font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-in-out tracking-[0.1rem]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
