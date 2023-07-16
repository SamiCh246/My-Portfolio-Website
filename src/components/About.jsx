import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#010F27] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the fade-in animation once
    threshold: 0.1, // Adjust the threshold value as needed
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <div className="flex flex-wrap gap-10 mt-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] w-[70%]"
        >
          As a skilled software developer, I have gained proficiency in various programming languages such as Swift, Dart, Python3, and JavaScript. I have also acquired expertise in utilizing frameworks like React, Node.js, Three.js, and Flutter. With a knack for quickly understanding new concepts, I thrive on close collaboration with clients to develop streamlined, scalable, and user-friendly solutions that effectively tackle real-world challenges. I am enthusiastic about partnering with you to turn your visionary ideas into tangible realities.
        </motion.p>
        <div className="w-[25%]">
          <motion.img
            ref={ref}
            src="src/assets/my_pic.png"
            alt="About Me"
            className="rounded-lg"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))} 
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
