import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaPhp />,
          <FaLaravel />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "courses",
    info: [
      {
        title: "SWD ( Special Web Design )",
        stage: "2022-2023",
      },
      {
        title: "WAD ( Web Application Development)",
        stage: "2022 - 2023",
      },
      {
        title: "Harvard CS50 - Computer Science Course",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Development - MMSIT",
        stage: "2022 - present",
      },
      {
        title: "Backend Development - MMSIT",
        stage: "2022 - present",
      },
      {
        title: "Full Stack Development",
        stage: "Progressing",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "No.1 Basic Education High School North Okkalapa",
        stage: "2016",
      },
      {
        title: "Technology University (Hmawbi) - Mechanical Power",
        stage: "2020",
      },
      {
        title: "Certified Frontend Developer",
        stage: "2023",
      },
      {
        title: "Certified Backend Developer",
        stage: "2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className=" h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className=" flex flex-col w-full flex-1 justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivation <span className=" text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I bring a keen eye for design and aesthetics, allowing me to
            contribute valuable insights during the design and development
            phases. I thrive in fast-paced environments where I can contribute
            innovative ideas and work collaboratively to achieve project goals.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className=" flex flex-1 xl:gap-x-6">
              {/* experiences */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={10} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 relative z-10">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    " text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className=" flex-1 flex flex-col md:flex-row max-w-max gap-x-2 text-center text-white/70"
                >
                  {/* title */}
                  <div className=" font-light mb-2 md:mb-0">{item.title}</div>
                  <div className=" hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className=" flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className=" text-2xl text-white" key={itemIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
