"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define TechnologiesProps
type TechnologiesProps = {
  img: string;
  alt: string;
}[][];

// Technologies data
const technologies: TechnologiesProps = [
  [
    { img: '/technologies/python.svg', alt: 'Python' },
    { img: '/technologies/javascript.svg', alt: 'JavaScript' },
    { img: '/technologies/typescript.svg', alt: 'TypeScript' },
    { img: '/technologies/css.svg', alt: 'CSS' },
    { img: '/technologies/react.svg', alt: 'React' },
    { img: '/technologies/mysql.svg', alt: 'MySQL' },
    { img: '/technologies/next.svg', alt: 'Next.js' },
    { img: '/technologies/node.svg', alt: 'Node.js' },
    { img: '/technologies/linux.svg', alt: 'Linux.js' },
  ],
  [
    { img: '/technologies/django.svg', alt: 'Django' },
    { img: '/technologies/razor.png', alt: 'vercel' },
    { img: '/technologies/nginx.svg', alt: 'Nginx' },
    { img: '/technologies/postgres.svg', alt: 'PostgreSQL' },
    { img: '/technologies/antd.svg', alt: 'Ant Design' },
    { img: '/technologies/chakra.svg', alt: 'Chakra UI' },
    { img: '/technologies/docker.svg', alt: 'Docker' },
    { img: '/technologies/git.svg', alt: 'Git' },
  ],
  [
    { img: '/technologies/lines/firstline.svg', alt: 'First Line' },
    { img: '/technologies/lines/secondline.svg', alt: 'Second Line' },
    { img: '/technologies/lines/thirdline.svg', alt: 'Third Line' },
    { img: '/technologies/lines/fourthline.svg', alt: 'Fourth Line' },
    { img: '/technologies/lines/fifthline.svg', alt: 'Fifth Line' },
    { img: '/technologies/lines/sixthline.svg', alt: 'Sixth Line' },
    { img: '/technologies/lines/seventhline.svg', alt: 'Seventh Line' },
    { img: '/technologies/lines/eighthline.svg', alt: 'Eighth Line' },
  ],
];

const TechnologiesSection: React.FC = () => {
  return (
    <section
      id="technologies"
      className="flex flex-col items-center justify-center gap-5 p-10 mb-60 mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies</h2>
        <div className="w-20 h-1 bg-[#FF6B00] mb-8 mx-auto"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          By leveraging these technologies, we promise optimized and scalable
          solutions for our customers
        </p>
      </motion.div>

      {/* First Row of Technologies */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 lg:mb-0">
        {technologies[0].map((tech, index) => (
          <div
            key={index}
            className="flex h-8 w-8 items-center justify-center rounded-full lg:bg-gray-800 xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-24 lg:w-24"
          >
            <Image
              src={tech.img}
              alt={tech.alt}
              width={30}
              height={30}
              className="h-10 w-10 xs:h-12 xs:w-12 sm:h-16 sm:w-16 md:h-12 md:w-12"
            />
          </div>
        ))}
      </div>

      {/* Second Row of Technologies */}
      <div className="flex flex-wrap justify-center gap-4">
        {technologies[1].map((tech, index) => (
          <div
            key={index}
            className="flex h-10 w-10 items-center justify-center rounded-full md:bg-gray-800 xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-24 lg:w-24"
          >
            <Image
              src={tech.img}
              alt={tech.alt}
              width={30}
              height={30}
              className="h-10 w-10 xs:h-12 xs:w-12 sm:h-16 sm:w-16 md:h-12 md:w-12"
            />
          </div>
        ))}
      </div>

      {/* Lines Section */}
      <div className="hidden lg:flex relative w-full items-center justify-center gap-4">
        {technologies[2].map((line, index) => (
          <div
            key={index}
            className="h-20 xs:h-28 sm:h-32 lg:h-48 xl:h-80"
          >
            <Image
              src={line.img}
              alt={line.alt}
              width={80}
              height={80}
              className="h-52 w-20"
            />
          </div>
        ))}
      </div>

      {/* Center Circular Design */}
      <div className="lg:flex items-center justify-center relative">
        <motion.div
          className="absolute h-[200px] sm:h-[700px] lg:h-[300px] w-[300px] sm:w-[700px] lg:w-[600px] rounded-full bg-orange-500/20 blur-3xl"
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="hidden absolute lg:flex items-center justify-between h-96 sm:h-[400px] lg:h-[500px] w-96 sm:w-[400px] lg:w-[500px] rounded-full">
          <Image
            src="/asklogo.png"
            alt="Logo"
            width={440}
            height={440}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
