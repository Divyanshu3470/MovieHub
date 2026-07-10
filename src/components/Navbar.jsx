import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-blue-500/20 text-blue-300"
        : "text-white hover:bg-white/10 hover:text-blue-300"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <span className="text-white">MOVIE</span>
              <span className="text-blue-400">HUB</span>
            </h1>
          </NavLink>

          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-base lg:text-lg font-semibold">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/movies" className={navClass}>
              Movies
            </NavLink>

            <NavLink to="/favourites" className={navClass}>
              Favourites
            </NavLink>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-5">
            <NavLink
              to="/"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Movies
            </NavLink>

            <NavLink
              to="/favourites"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Favourites
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;