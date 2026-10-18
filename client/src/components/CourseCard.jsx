import React from "react";

export default function CourseCard({ course }) {
  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl 
      border border-gray-200 dark:border-gray-700 overflow-hidden 
      transition-all hover:-translate-y-1 cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover"
        />

        {/* Discount Tag */}
        {course.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-lg shadow">
            {course.discount}% OFF
          </span>
        )}

        {/* Featured Tag */}
        {course.featured && (
          <span className="absolute top-3 right-3 bg-yellow-400 text-black font-semibold text-xs px-3 py-1 rounded-lg shadow">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold line-clamp-2 dark:text-white">
          {course.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
          {course.description}
        </p>

        {/* Author + Level */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
            <img src={course.instructorImg} alt="" className="w-5 h-5 rounded-full" />
            {course.instructor}
          </span>

          <span className="text-blue-600 dark:text-blue-300 font-semibold flex items-center gap-1">
            ⭐ {course.rating}
          </span>
        </div>

        {/* Time + Lessons */}
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-600 dark:text-gray-300">
          <span>⏳ {course.duration}</span>
          <span>📚 {course.lessons} lessons</span>
        </div>

        {/* Price Section */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold text-black dark:text-white">
            ₹{course.price}
          </span>
          <span className="text-gray-500 line-through">₹{course.oldPrice}</span>
        </div>

        {/* Button */}
        <button
          className="mt-5 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold 
          hover:bg-blue-700 transition"
        >
          View Course
        </button>
      </div>
    </div>
  );
}
