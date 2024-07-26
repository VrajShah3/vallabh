import Display from "@/components/Display";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import React from "react";

const Home = () => {
  return (
    <section>
      <div className="mx-auto h-full">
        <div>
          <Hero />
          <Stats />
          <Display />
        </div>
      </div>
    </section>
  );
};

export default Home;
