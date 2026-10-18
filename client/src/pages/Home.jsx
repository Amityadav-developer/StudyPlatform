/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const skills = [
    "Full Stack  Development",
    "Full Stack Android + iOS App Development",
    "Data Science & Machine Learning",
  ];
  const [text, setText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          // ⬆️ Type ho raha hai
          setText(skills[skillIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          // 🔥 Word complete → PAUSE
          if (charIndex + 1 === skills[skillIndex].length) {
            setTimeout(() => setDeleting(true), 700); // 700ms pause
          }
        } else {
          // ⬇️ Delete ho raha hai
          setText(skills[skillIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex - 1 === 0) {
            setDeleting(false);
            setSkillIndex((skillIndex + 1) % skills.length);
          }
        }
      },
      deleting ? 40 : 70
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, skillIndex]);

  // ✅ Projects Carousel State
  const projects = [
    {
      title: "Contact Management System",
      description:
        "Build a system to manage contacts using Python dictionaries, functions, and file operations.",
      img: "https://source.unsplash.com/400x300/?contacts,app",
    },
    {
      title: "Learner Management System",
      description:
        "Create a system to manage learners using Python’s OOP principles like classes and objects.",
      img: "https://source.unsplash.com/400x300/?learning,app",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "Develop a tracker to manage income and expenses using Python variables, loops, and data structures.",
      img: "https://source.unsplash.com/400x300/?finance,app",
    },
    {
      title: "E-commerce Website",
      description:
        "Build a fully functional e-commerce site with product listing, cart, and checkout using React and Node.js.",
      img: "https://source.unsplash.com/400x300/?ecommerce,website",
    },
    {
      title: "Blog Platform",
      description:
        "Develop a blog platform with CRUD operations, authentication, and comments functionality.",
      img: "https://source.unsplash.com/400x300/?blog,website",
    },
  ];

  const roadmap = [
    {
      stage: "Beginner - Zero to Basics",
      description:
        "HTML → CSS → JavaScript fundamentals. Build small web pages & understand core programming logic.",
    },
    {
      stage: "Intermediate - Build Projects & Apps",
      description:
        "Build real-world projects: websites, basic web-apps, simple backend (optional), understand version-control (Git).",
    },
    {
      stage: "Job-Ready - Job-Level Skills",
      description:
        "Master Full-Stack/web/app skills, data-structures, algorithms, practical coding — apply for internships/jobs.",
    },
    {
      stage: "Industry-Level - Real Work Experience",
      description:
        "Work on real client projects or company codebase, understand workflows, collaborate, debugging & deployment.",
    },
    {
      stage: "Advanced / Expert",
      description:
        "Learn optimization, architecture, advanced backend/frontend, system design, scale projects — become top-tier dev.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 3 : prev - 1));
  };
  const nextProject = () => {
    setCurrentIndex((prev) => (prev >= projects.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 min-h-screen bg-white text-gray-800">
        <div className="max-w-xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Learn Coding & Digital Skills Smarter & Faster
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg opacity-90"
          >
            Zero to Advanced with real projects, mentorship & AI‑guided
            learning.
          </motion.p>

          {/* Typing Effect */}
          <p className="text-lg text-black mt-2 h-6 font-bold flex items-center gap-2">
            <span className="text-2xl font-extrabold text-black">Learn</span>
            <span>{text}</span>
            <span className="blinking-cursor">|</span>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 mt-6"
          >
            <a href="/tutorials">
              <button className="px-6 py-3 bg-blue-500 text-black font-semibold rounded-xl shadow cursor-pointer flex items-center gap-2">
                Start Learning
                <span>➜</span>
              </button>
            </a>

            <a href="/courses">
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow cursor-pointer flex items-center gap-2">
                Explore Courses
                <span>➜</span>
              </button>
            </a>
          </motion.div>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/img.jpeg"
          alt="Hero Illustration"
          className="w-60 md:w-80 mt-10 md:mt-15 rounded-full object-cover border-4 border-black shadow-lg -translate-x-4 md:-translate-x-20"
        />
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Adaptive Learning Path",
            "Real Startup Projects",
            "Weekly Doubt Support",
            "Internship & Placement Help",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-2xl shadow"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRENDING COURSES */}
      <section className="px-8 md:px-20 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-10">Trending Courses</h2>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Full Stack Development",
            "DSA + Competitive Programming",
            "Python Zero to Hero",
            "Android / iOS Development",
            "AI / ML Basics",
            "Digital Marketing",
          ].map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer"
            >
              {course}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROADMAPS */}
      <section className="py-20 bg-gray-50 px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Your Coding Journey: From Zero to Expert
        </motion.h2>

        <div className="space-y-12">
          {roadmap.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mx-auto md:max-w-3xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold mr-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {step.stage}
                </h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* =================== REAL WORLD PRACTICE SECTION =================== */}
      <section className="py-20 bg-white px-4 md:px-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Code Smarter with Real-World Practice
        </h2>

        {/* Sub Text */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4 text-sm md:text-base">
          At CodeWithHarry, you don't just learn code, you engage in practical
          exercises that reflect real-world scenarios. From beginner-friendly
          lessons to advanced courses trusted by professionals, we prepare you
          for real-world projects.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
            <img
              src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg"
              alt="Web Development"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Learn HTML, CSS, JavaScript and modern frameworks to build
                responsive websites and web applications.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
            <img
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
              alt="Data Science & AI"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Data Science & AI</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Master Python, data analysis, machine learning and AI with
                hands-on projects.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
            <img
              src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg"
              alt="DSA"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Data Structures & Algorithms
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Learn DSA and crack interviews at top companies like Google and
                Microsoft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ COURSES SECTION */}
      <section className="px-4 md:px-20 py-20 bg-gray-50">
        <p className="text-sm text-gray-500 mb-2">Courses</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Master Coding with Our Core Offerings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Beginner-Friendly */}
          <div className="bg-gray-300 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
            <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <span>🅱️</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Beginner-Friendly</h3>
            <p className="text-gray-700 text-sm">
              Step-by-step courses designed for absolute beginners to kickstart
              their coding journey.
            </p>
          </div>

          {/* Advanced Concepts */}
          <div className="bg-gray-300 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
            <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <span>📚</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Advanced Concepts</h3>
            <p className="text-gray-700 text-sm">
              Deep dive into advanced topics and frameworks to level up your
              skills.
            </p>
          </div>

          {/* Real-World Projects */}
          <div className="bg-gray-300 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
            <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <span>💻</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Real-World Projects</h3>
            <p className="text-gray-700 text-sm">
              Learn by building real-world projects and gain hands-on
              experience.
            </p>
          </div>

          {/* Affordable Pricing */}
          <div className="bg-gray-300 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
            <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <span>$</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Affordable Pricing</h3>
            <p className="text-gray-700 text-sm">
              Access premium courses at prices tailored for students and
              professionals.
            </p>
          </div>

          {/* Comprehensive Resources */}
          <div className="bg-gray-300 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
            <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <span>📄</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Comprehensive Resources
            </h3>
            <p className="text-gray-700 text-sm">
              Gain access to templates, documentation, and code snippets to
              enhance your learning experience.
            </p>
          </div>

          {/* Industry Insights */}
          <div className="bg-gray-300 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
            <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <span>🏭</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Industry Insights</h3>
            <p className="text-gray-700 text-sm">
              Stay updated with latest trends and insights from the tech
              industry to keep your skills relevant.
            </p>
          </div>
        </div>
      </section>
      {/* ================== STATS SECTION ================== */}
      <section className="py-20 bg-white text-center px-4 md:px-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-12 leading-snug">
          Empowering Aspiring Developers to Build Their Future in Tech!
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div>
            <p className="text-gray-500 mb-1">
              Students land their first developer job in
            </p>
            <h3 className="text-4xl font-extrabold">6 months</h3>
            <p className="text-gray-600 mt-1">on average</p>
          </div>

          {/* Card 2 */}
          <div>
            <p className="text-gray-500 mb-1">Over</p>
            <h3 className="text-4xl font-extrabold">7,000,000+</h3>
            <p className="text-gray-600 mt-1">students trained</p>
          </div>

          {/* Card 3 */}
          <div>
            <p className="text-gray-500 mb-1">Total YouTube Views</p>
            <h3 className="text-4xl font-extrabold">1 Billion+</h3>
            <p className="text-gray-600 mt-1">views and counting</p>
          </div>
        </div>
      </section>

      {/* ✅ ADD PROJECTS CAROUSEL SECTION HERE */}
      <section className="px-4 md:px-20 py-20 bg-[#fdf2eb]">
        <h2 className="text-3xl font-bold text-center mb-10">
          Build Real-World Projects
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevProject}
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200 hidden md:flex items-center justify-center"
          >
            &#8592;
          </button>

          {/* Projects Cards */}
          <div className="flex overflow-hidden w-full gap-4">
            {projects
              .slice(currentIndex, currentIndex + 3)
              .map((project, idx) => (
                <div
                  key={idx}
                  className="flex-none w-full md:w-[32%] bg-white rounded-xl shadow-md p-4"
                >
                  <img
                    src={project.img} // Online image
                    alt={project.title}
                    className="rounded-lg h-40 w-full object-cover mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            className="absolute right-0 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200 hidden md:flex items-center justify-center"
          >
            &#8594;
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx >= currentIndex && idx < currentIndex + 3
                  ? "bg-black"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="px-8 md:px-20 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Testimonials</h2>

        <div
          id="testimonial-container"
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {/* Mohit Kumar */}
          <div className="flex-none w-[400px] bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <p className="text-gray-700 mb-4">
              I don't have words to thank this man, I'm really grateful to have
              this channel and website in my daily routine. If you're a mere
              beginner, then you can trust this guy and can put your time into
              his content. I can assure you that it'll be worth it.
            </p>
            <div className="flex items-center space-x-4">
              <div>
                <p className="font-semibold">Mohit Kumar</p>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div>
            </div>
          </div>

          {/* Rakesh Shetty */}
          <div className="flex-none w-[400px] bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <p className="text-gray-700 mb-4">
              For everyone who wants to level up their #Coding and #Dev skills -
              seriously, this channel is for you! Both basic and advanced stacks
              are covered on this channel, and one can learn according to their
              skill levels. And the icing on the cake is, most of the content is
              available for free.
            </p>
            <div className="flex items-center space-x-4">
              <div>
                <p className="font-semibold">Rakesh Shetty</p>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div>
            </div>
          </div>
          {/* Rakesh Shetty */}
          <div className="flex-none w-[400px] bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <p className="text-gray-700 mb-4">
              For everyone who wants to level up their #Coding and #Dev skills -
              seriously, this channel is for you! Both basic and advanced stacks
              are covered on this channel, and one can learn according to their
              skill levels. And the icing on the cake is, most of the content is
              available for free.
            </p>
            <div className="flex items-center space-x-4">
              <div>
                <p className="font-semibold">Rakesh Shetty</p>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION  h mera ook */}
      <section
        className="relative w-full min-h-[420px] md:min-h-[480px] lg:min-h-[400px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        {/* FULL OVERLAY */}
        <div className="absolute inset-0 bg-blue-50/60 backdrop-blur-[1px]"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4 md:px-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Start Your Coding Journey
          </h1>

          <p className="mt-4 text-base md:text-xl lg:text-2xl text-black max-w-2xl mx-auto">
            Learn coding step-by-step with India's most loved programming
            mentor.
          </p>

          <a href="/signup">
            <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-black text-white rounded-lg text-base md:text-lg font-semibold hover:bg-gray-800 transition cursor-pointer">
              Start Now
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
