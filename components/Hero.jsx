"use client";

import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1717137389747-d1d4ced6abc8?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mtext: "Get The Best Option For Your House",
      ptext: "Get The Best Option For Your House",
      href: "",
      litext: "contact us",
    },
    {
      url: "https://images.unsplash.com/photo-1721296381825-426cfb4dc450?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mtext: "test2",
      ptext: "test2",
      href: "",
      litext: "click here",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-[400px] xl:h-[750px] relative mx-auto">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover flex justify-center items-center absolute"
        >
          <div className="text-white font-primary text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center items-center xl:text-6xl text-xl font-semibold xl:pb-10 pb-2"
            >
              {slides[currentIndex].mtext}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="xl:text-3xl text-base font-medium xl:pb-10 pb-2 flex justify-center items-center"
            >
              {slides[currentIndex].ptext}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center justify-center"
            >
              <Button className="font-primary capitalize xl:text-xl text-sm font-medium xl:size-100 size-15">
                {slides[currentIndex].litext}
              </Button>
            </motion.div>
          </div>
          <motion.div
            key={`progress-${currentIndex}`}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 7 }}
            className="absolute bottom-0 left-0 h-1 bg-primary/50"
          />
        </motion.div>
      </AnimatePresence>
      {/* left arrow */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 rounded-[10px] text-2xl p-2 bg-black/10 text-primary cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={25} />
      </div>
      {/* right arrow */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 rounded-[10px] text-2xl p-2 bg-black/10 text-primary cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={25} />
      </div>
    </div>
  );
};

export default Hero;
