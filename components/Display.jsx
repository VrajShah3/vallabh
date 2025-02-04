"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "./WorkSliderBtns";

const projects = [
  {
    category: "Granite",
    title: "Rajasthan Black",
    description:
      "A dynamic and responsive web application demonstrating modern design and functionality.",
    image: "/assets/rb.jpg",
  },
  {
    category: "Marble",
    title: "Italian",
    description:
      "A dynamic and responsive web application demonstrating modern design and functionality.",
    image: "/assets/im.jpg",
  },
  {
    category: "Granite",
    title: "Crystal Yellow",
    description:
      "A dynamic and responsive web application demonstrating modern design and functionality.",
    image: "/assets/cy.jpg",
  },
];

const Display = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.realIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <h2 className="text-[42px] font-bold font-secondary leading-none text-black group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <h2 className="text-[42px] font-bold font-primary leading-none text-black group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-black/60">{project.description}</p>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true} // Enable loop
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className=" h-[300px] xl:h-[460px] relative group flex justify-center items-center bg-orange-400/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-white/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-navbg hover:bg-navbg/70 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Display;