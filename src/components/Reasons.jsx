import React from "react";

function Reasons() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          More reasons to join
        </h1>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 lg:justify-center min-w-max lg:min-w-0">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="w-[260px] sm:w-[280px] lg:w-[320px] h-[280px] lg:h-[340px] bg-black rounded-3xl p-6 shadow-xl flex-shrink-0 hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-white text-2xl lg:text-3xl font-bold">
                  {reason.title}
                </h2>

                <p className="text-gray-300 mt-5 text-base lg:text-lg leading-7">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reasons;