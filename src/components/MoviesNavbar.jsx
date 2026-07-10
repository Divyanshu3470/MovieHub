import React from 'react'
import { NavLink } from 'react-router-dom'

function MoviesNavbar() {
    const navClass = ({ isActive }) =>
        `pb-1 border-b-2 transition-all ${isActive
            ? "border-blue-400 text-blue-400"
            : "border-transparent text-white"
        }`;

    return (
        <div className='flex items-center justify-between bg-gray-600'>
            <div className="">
                <h1 className="text-4xl font-bold p-5">
                    <span className="text-white">MOVIE</span>
                    <span className="text-blue-400">HUB</span>
                </h1>
            </div>
            <div className="text-white text-[18px] font-semibold px-20 flex gap-8">
                <NavLink to='/' className={navClass}>Home</NavLink>
                <NavLink to='/movies' className={navClass}>Movies</NavLink>
                <NavLink to='/favourites' className={navClass}>Favourites</NavLink>
                
            </div>
        </div>
    )
}

export default MoviesNavbar
