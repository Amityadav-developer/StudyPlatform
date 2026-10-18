import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload नहीं होगा
    setSuccess(true);
    console.log("Submitted email:", email); // API या backend call यहां कर सकते हैं
    setEmail(""); // input clear
    setTimeout(() => setSuccess(false), 4000); // 4 सेकंड में success message disappear
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-300 py-12 px-6  border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">CodeVidhi</h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Learn smart. Build fast. Grow big. Your gateway to coding &
            real-world tech skills.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Join our Community
            </h3>
            <div className="flex gap-3 text-2xl">
              <a
                href="https://discord.com"
                target="_blank"
                className="hover:text-white"
              >
                <FaDiscord />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                className="hover:text-white"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Main Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Main</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-white hover:underline underline-offset-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white hover:underline underline-offset-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white hover:underline underline-offset-4"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="hover:text-white hover:underline underline-offset-4"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Learning Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Learn</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/courses"
                className="hover:text-white hover:underline underline-offset-4"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/tutorials"
                className="hover:text-white hover:underline underline-offset-4"
              >
                Tutorials
              </a>
            </li>
            <li>
              <a
                href="/notes"
                className="hover:text-white hover:underline underline-offset-4"
              >
                Notes
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-white hover:underline underline-offset-4"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/roadmaps"
                className="hover:text-white hover:underline underline-offset-4"
              >
                Roadmaps
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Get new tutorials, courses & project ideas delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex bg-white/10 rounded-lg overflow-hidden backdrop-blur-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-transparent outline-none text-gray-100"
                placeholder="Enter your email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
              <button className="px-4 bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer">
                Subscribe
              </button>
            </div>
            {success && (
              <span className="text-green-400 text-sm">
                Email submitted successfully!
              </span>
            )}
          </form>

          {/* Social Icons */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="https://github.com" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="https://twitter.com" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" className="hover:text-white">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-400 text-sm mt-12 border-t border-gray-600 pt-6">
        © 2025 <span className="text-white font-semibold">CodeVidhi</span> —
        Made with ❤️ by Amit Yadav in India.
      </div>
    </footer>
  );
}
