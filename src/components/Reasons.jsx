import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them.",
    },
    {
      title: "Personalized Recommendations",
      desc: "Discover movies and shows tailored to your taste based on your watch history.",
    },
    {
      title: "Create Multiple Profiles",
      desc: "Keep everyone's watchlist, recommendations and viewing history separate.",
    },
    {
      title: "Build Your Watchlist",
      desc: "Save your favorite movies and TV shows to watch anytime.",
    },
    {
      title: "Fast & Powerful Search",
      desc: "Find movies, TV shows, actors and genres instantly.",
    },
  ];

  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth < 1024) return;

    const wrapper = wrapperRef.current;
    const slider = sliderRef.current;

    const totalScroll = slider.scrollWidth - wrapper.offsetWidth;

    const animation = gsap.to(slider, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white w-full py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12">
          More reasons to join
        </h1>

        <div
          ref={wrapperRef}
          className="overflow-x-auto lg:overflow-hidden scrollbar-hide"
        >
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 w-max pr-4 lg:pr-8 snap-x snap-mandatory"
          >
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="w-[250px] sm:w-[280px] lg:w-[320px] h-[260px] sm:h-[300px] lg:h-[340px] bg-black rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 flex-shrink-0 shadow-xl snap-start hover:scale-105 transition-transform duration-300">
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                  {reason.title}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-4 lg:mt-6 leading-6 lg:leading-8">
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