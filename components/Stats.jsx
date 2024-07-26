"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 15,
    text: "Years of Experience",
    description:
      "Vallabh Traders, established in 2010, is India's trusted company of the Natural Stone Trading Industry. Our founder Shri. Hardik Shah, with his modest family background and indomitable entrepreneurial spirit, established our company in the city of Himmatnagar. We started our journey by entering into the trade of granite, catering to the needs of both private and government sites. Today we stand with a strength of backward and forward integration in equal proportion to remain a most cost-competitive company, trading Sandstone, Marble, Granite, Limestone with the latest standards.",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-60 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-3 h-[100px] xl:h-[400px] max-w-[100vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex flex-col gap-4 items-center justify-center"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  className="text-4xl xl:text-6xl font-extrabold font-secondary"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[600px]" : "max-w-[650px]"
                  } leading-snug text-black/80 text-lg xl:text-4xl font-semibold font-secondary`}
                >
                  {item.text}
                </p>
                <p
                  className={`
                    leading-snug text-black/80 text-sm xl:text-xl font-normal`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
