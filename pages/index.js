// next image
import Image from "next/image";
import Head from "next/head";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { easeInOut, motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/avatar.png" />
      </Head>
      <div className=" bg-primary/60 h-full">
        {/* text */}
        <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className=" text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Hi! I&apos;m Pyae Sone <br/>
              <span className=" text-accent">Backend Developer</span> 
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              I am a dedicated and experienced backend developer with a passion
              for building robust and scalable systems. With a strong foundation
              in server-side technologies, databases, and API development, I
              take pride in crafting efficient and reliable solutions that power
              the backbone of web and software applications. I am committed to
              staying up-to-date with industry best practices and emerging
              trends, ensuring that I deliver high-quality code that meets both
              user and business needs.
            </motion.p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative z-[5]">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" hidden xl:flex relative z-[5]"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className=" w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg image */}
          <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* particles */}
          <ParticlesContainer />
          {/* avatar */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0  lg:right-[8%] hidden xl:flex"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
