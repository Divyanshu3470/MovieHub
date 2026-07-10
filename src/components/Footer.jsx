import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-black mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="text-center">
          <p className="text-base sm:text-lg font-medium mb-6 leading-relaxed">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <input
              type="email"
              placeholder="Email address"
              className="w-full sm:max-w-md lg:max-w-xl border border-gray-400 rounded-md px-5 py-4 bg-white outline-none focus:border-red-500"
            />

            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition text-white font-semibold text-lg sm:text-xl px-8 py-4 rounded-md">
              Get Started
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 mt-14 text-sm sm:text-[15px]">
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              Investor Relations
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Speed Test
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Help Centre
            </a>
            <a href="#" className="hover:underline">
              Jobs
            </a>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
            <a href="#" className="hover:underline">
              Legal Notices
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Account
            </a>
            <a href="#" className="hover:underline">
              Ways to Watch
            </a>
            <a href="#" className="hover:underline">
              Corporate Information
            </a>
            <a href="#" className="hover:underline">
              Only on MovieHub
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Media Centre
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-12">
          <select className="border border-gray-400 rounded-md px-4 py-2 bg-white text-sm sm:text-base">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <div className="mt-10">
          <p className="font-medium text-sm sm:text-base">
            MovieHub India
          </p>

          <p className="text-xs sm:text-sm text-gray-600 mt-5 leading-relaxed max-w-2xl">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;