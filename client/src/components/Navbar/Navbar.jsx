import React, { useState } from "react";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false); // 🔥 New state

  return (
    <>
      <nav className="w-full bg-white shadow-md px-4 py-2 flex justify-between items-center fixed top-0 left-0 z-50">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 select-none">
          <svg
            width="160"
            height="50"
            viewBox="0 0 350 150"
            className="object-contain"
          >
            <defs>
              <filter id="softGlowCyan">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="softGlowOrange">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <text
              x="5"
              y="70"
              fontSize="70"
              fontWeight="900"
              fill="#00eaff"
              filter="url(#softGlowCyan)"
            >
              {"</>"}
            </text>

            <text
              x="150"
              y="65"
              fontSize="70"
              fontWeight="900"
              fill="#ff7a1a"
              filter="url(#softGlowOrange)"
            >
              Code
            </text>

            <text
              x="175"
              y="155"
              fontSize="78"
              fontWeight="700"
              fill="#00c8b2"
              filter="url(#softGlowCyan)"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              विधि
            </text>
          </svg>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <a href="/" className="font-medium hover:text-blue-600">
            Home
          </a>
          <a href="/courses" className="font-medium hover:text-blue-600">
            Courses
          </a>
          <a href="/tutorials" className="font-medium hover:text-blue-600">
            Tutorials
          </a>
          <a href="/notes" className="font-medium hover:text-blue-600">
            Notes
          </a>
          <a href="/projects" className="font-medium hover:text-blue-600">
            Projects
          </a>
          <a href="/roadmaps" className="font-medium hover:text-blue-600">
            Roadmaps
          </a>
          <a href="/blog" className="font-medium hover:text-blue-600">
            Blog
          </a>
          <a href="/contact" className="font-medium hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop Search */}
          <div className="hidden md:block">
            <Search />
          </div>

          {/* 🔥 Mobile Search Icon */}
          <button
            className="md:hidden text-2xl p-2"
            onClick={() => setMobileSearch(!mobileSearch)}
          >
            🔍
          </button>

          {/* Desktop Login/Signup */}
          <div className="hidden md:flex items-center gap-4">
            <DarkModeToggle />
            <a
              href="/login"
              className="px-4 py-2 border border-blue-600 rounded font-bold hover:bg-blue-600 hover:text-white"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 border border-green-600 rounded font-bold hover:bg-green-600 hover:text-white"
            >
              Signup
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl font-bold p-2"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* 🔥 Mobile Search Dropdown */}
      {mobileSearch && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white p-3 shadow-md z-40">
          <Search />
        </div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="text-3xl absolute top-4 right-4"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <div className="mt-16 flex flex-col gap-6 pl-6 text-lg font-semibold">
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </a>
          <a href="/tutorials" onClick={() => setMenuOpen(false)}>
            Tutorials
          </a>
          <a href="/notes" onClick={() => setMenuOpen(false)}>
            Notes
          </a>
          <a href="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="/roadmaps" onClick={() => setMenuOpen(false)}>
            Roadmaps
          </a>
          <a href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <DarkModeToggle />

          <a
            href="/login"
            className="mt-4 px-4 py-2 border border-blue-600 rounded font-bold w-fit"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 border border-green-600 rounded font-bold w-fit"
          >
            Signup
          </a>
        </div>
      </div>
    </>
  );
}
