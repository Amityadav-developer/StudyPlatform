import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import FAQ from "../components/CourseFaqs/FAQ";
import FAQ1 from "../components/CourseFaqs/FAQ1";



export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "App Development",
    "Data Science",
    "AI / ML",
    "Cyber Security",
    "Electronics",
  ];

const courses = [
  {
    title: "Ultimate Data Science Bootcamp 2025",
    thumbnail: "fullstack.png",
    description: "Learn Data Science with live projects, ML, Python & analytics.",
    instructor: "Amit Yadav",
    instructorImg: "https://i.pravatar.cc/300?img=12",
    rating: 4.8,
    duration: "45h 20m",
    lessons: 220,
    price: 2899,
    oldPrice: 4499,
    discount: 36,
    featured: true,
    category: "Data Science"
  },
  {
    title: "Complete C Language Course (Beginner + Advance)",
    thumbnail: "img.jpeg",
    description: "Learn C language from absolute scratch with 100+ examples.",
    instructor: "Amit Yadav",
    instructorImg: "https://i.pravatar.cc/300?img=52",
    rating: 4.7,
    duration: "12h 10m",
    lessons: 88,
    price: 389,
    oldPrice: 3499,
    discount: 89,
    category: "Programming"
  },
  {
    title: "Full Stack Web Development Masterclass 2025",
    thumbnail: "fullstack.png",
    description: "Become a full stack developer using MERN stack + projects.",
    instructor: "Amit Yadav",
    instructorImg: "https://i.pravatar.cc/300?img=55",
    rating: 4.9,
    duration: "30h 50m",
    lessons: 180,
    price: 788,
    oldPrice: 2069,
    discount: 62,
    featured: true,
    category: "Web Development"
  },
  {
    title: "Python Bootcamp 2025: Learn Python from Zero",
    thumbnail: "fullstack.png",
    description: "Python programming, automation & real world projects.",
    instructor: "Amit Yadav",
    instructorImg: "https://i.pravatar.cc/300?img=33",
    rating: 4.8,
    duration: "17h 36m",
    lessons: 108,
    price: 388,
    oldPrice: 2000,
    discount: 81,
    category: "Programming"
  },

  // ⭐ NEW COURSES START FROM HERE ⭐

  {
    title: "Android App Development with Kotlin (2025)",
    thumbnail: "fullstack.png",
    description: "Become an Android developer — Kotlin, Jetpack & real apps.",
    instructor: "Amit Yadav",
    instructorImg: "https://i.pravatar.cc/300?img=39",
    rating: 4.8,
    duration: "28h 40m",
    lessons: 150,
    price: 999,
    oldPrice: 3599,
    discount: 72,
    category: "App Development"
  },
  {
    title: "AI & Machine Learning Mastery 2025",
    thumbnail: "fullstack.png",
    description: "Learn ML, Neural Networks, Deep Learning & real-world AI.",
    instructor: "Amit Yadav",
    instructorImg: "https://i.pravatar.cc/300?img=41",
    rating: 4.9,
    duration: "60h 10m",
    lessons: 260,
    price: 1499,
    oldPrice: 5000,
    discount: 70,
    category: "AI / ML"
  },
  {
    title: "Cyber Security & Ethical Hacking 2025",
    thumbnail: "fullstack.png",
    description: "Master cyber security tools, network attacks & hacking skills.",
    instructor: "Amit Yadav",
    instructorImg: "https://i.pravatar.cc/300?img=18",
    rating: 4.8,
    duration: "42h 55m",
    lessons: 190,
    price: 1199,
    oldPrice: 4599,
    discount: 74,
    category: "Cyber Security"
  },
  {
    title: "Electronics & Embedded Systems Course (2025)",
    thumbnail: "fullstack.png",
    description: "Microcontrollers, sensors, IoT, PCB design & embedded C.",
    instructor: "Amit Yadav",
    instructorImg: "https://i.pravatar.cc/300?img=44",
    rating: 4.7,
    duration: "33h 20m",
    lessons: 140,
    price: 799,
    oldPrice: 3000,
    discount: 74,
    category: "Electronics"
  }
];


  const filteredCourses = courses.filter(course => {
    const matchCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="mt-20 px-4 md:px-12">

      {/* -------------------- TOP HEADER -------------------- */}
      <div className="w-full bg-gray-50 dark:bg-gray-900 dark:text-white py-12 rounded-2xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          Explore Our Courses
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
          Learn job-ready tech skills from beginner to advanced levels.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mt-8">
          <input
            type="text"
            placeholder="Search for a course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-blue-500 outline-none text-black dark:text-white
                     bg-white dark:bg-gray-800"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl shadow-sm border transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* -------------------- COURSE CARDS SECTION -------------------- */}
      <h2 className="text-3xl font-bold mt-12 text-center dark:text-white">
        Premium Courses
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
        High-quality courses designed to make you job ready.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {filteredCourses.length === 0 ? (
          <p className="text-center col-span-4 text-gray-500 dark:text-gray-300 text-lg">
            No courses found.
          </p>
        ) : (
          filteredCourses.map((course, i) => <CourseCard key={i} course={course} />)
        )}
        
      </div>

{/* -------------------- FAQ SECTION -------------------- */}
<div className="mt-20 bg-gray-50 dark:bg-gray-900 p-10 rounded-2xl shadow">
  <h2 className="text-3xl font-bold text-center dark:text-white mb-10">
   Batch related Doubts
  </h2>

  <FAQ1 />
</div>
 

{/* -------------------- GENERAL DOUBTS SECTION -------------------- */}




  
<div className="mt-20 bg-gray-50 dark:bg-gray-900 p-10 rounded-2xl shadow">
  <h2 className="text-3xl font-bold text-center dark:text-white mb-10">
    General Doubts
  </h2>

  <FAQ />
</div>
 

  

      
    </div>
    
  );
}
