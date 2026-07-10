import React from "react";
import Background from "../assets/Background.png";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import PopularMovies from "../components/PopularMovies.jsx";
import LatestMovies from "../components/LatestMovies.jsx";
import Reasons from "../components/Reasons.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div className="w-full overflow-x-hidden">

      <section className="relative min-h-screen w-full">
        <img
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </section>

      <section className="bg-white">
        <PopularMovies />
        <LatestMovies />
        <Reasons />
        <Footer />
      </section>

    </div>
  );
}

export default Home;