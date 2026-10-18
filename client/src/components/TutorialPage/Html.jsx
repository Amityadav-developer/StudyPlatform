/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

export default function Html({ intro }) {
  // -------------------- DROPDOWN STATES --------------------
  const [open, setOpen] = useState({
    intro: intro === "true" ? true : false,
    basic: false,
    inlineBlock: false,
    lists: false,
    tables: false,
    forms: false,
    head: false,
    media: false,
    misc: false,
  });

  // Toggle function
  const toggle = (name) => {
    setOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="flex bg-gray-50">
      {/* -------------------- LEFT SIDEBAR -------------------- */}
      <aside className="w-72 h-screen overflow-y-auto border-r bg-white p-6 sticky top-0">
        {/* TITLE */}
        <h1 className="text-2xl font-extrabold text-black mb-6">
          HTML Tutorial
        </h1>

        {/* -------------------- SIDEBAR LIST -------------------- */}
        <ul className="space-y-4 text-gray-800">
          {/* Introduction */}
          <li>
            <div
              onClick={() => toggle("intro")}
              className="font-semibold flex justify-between items-center cursor-pointer hover:text-orange-500"
            >
              <span>Introduction</span>
              {open.intro ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open.intro && (
              <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                <li className="cursor-pointer hover:text-orange-500">
                  What is HTML?
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Working
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Installation
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Execution
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Page Structure
                </li>
                <li className="cursor-pointer hover:text-orange-500">Tags</li>
                <li className="cursor-pointer hover:text-orange-500">
                  Elements
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Attributes
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Comments
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  IDs & Classes
                </li>
              </ul>
            )}
          </li>

          {/* HTML Basic Tags */}
          <li>
            <div
              onClick={() => toggle("basic")}
              className="font-semibold flex justify-between items-center cursor-pointer hover:text-orange-500"
            >
              <span>HTML Basic Tags</span>
              {open.basic ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open.basic && (
              <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                <li className="cursor-pointer hover:text-orange-500">
                  Skeletal Tags
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Heading Tags
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Paragraph Tag
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Horizontal Line Tag
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Line Break Tag
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Anchor Tag
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Image Tag
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Pre Tag
                </li>
              </ul>
            )}
          </li>

          {/* Inline & Block Elements */}
          <li>
            <div
              onClick={() => toggle("inlineBlock")}
              className="font-semibold flex justify-between items-center cursor-pointer hover:text-orange-500"
            >
              <span>Inline & Block Elements</span>
              {open.inlineBlock ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open.inlineBlock && (
              <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                <li className="cursor-pointer hover:text-orange-500">
                  Inline Elements
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Block Elements
                </li>
              </ul>
            )}
          </li>

          {/* HTML Lists */}
          <li>
            <div
              onClick={() => toggle("lists")}
              className="font-semibold flex justify-between items-center cursor-pointer hover:text-orange-500"
            >
              <span>HTML Lists</span>
              {open.lists ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open.lists && (
              <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                <li className="cursor-pointer hover:text-orange-500">Lists</li>
                <li className="cursor-pointer hover:text-orange-500">
                  Unordered List
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Ordered List
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Definition Lists
                </li>
              </ul>
            )}
          </li>

          {/* HTML Tables */}
          <li>
            <div
              onClick={() => toggle("tables")}
              className="font-semibold flex justify-between items-center cursor-pointer hover:text-orange-500"
            >
              <span>HTML Tables</span>
              {open.tables ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open.tables && (
              <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                <li className="cursor-pointer hover:text-orange-500">Tables</li>
                <li className="cursor-pointer hover:text-orange-500">
                  More on Tables
                </li>
              </ul>
            )}
          </li>

          {/* HTML Forms */}
          <li>
            <div
              onClick={() => toggle("forms")}
              className="font-semibold flex justify-between items-center cursor-pointer hover:text-orange-500"
            >
              <span>HTML Forms</span>
              {open.forms ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open.forms && (
              <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                <li className="cursor-pointer hover:text-orange-500">
                  Introduction to HTML Forms
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Input Types
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Textarea & Select
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  More on Forms
                </li>
              </ul>
            )}
          </li>

          {/* Head Elements */}
          <li>
            <div
              onClick={() => toggle("head")}
              className="font-semibold flex justify-between items-center cursor-pointer hover:text-orange-500"
            >
              <span>Head Elements</span>
              {open.head ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open.head && (
              <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                <li className="cursor-pointer hover:text-orange-500">
                  Meta Tags
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Link & Script Tags
                </li>
              </ul>
            )}
          </li>

          {/* HTML Media */}
          <li>
            <div
              onClick={() => toggle("media")}
              className="font-semibold flex justify-between items-center cursor-pointer hover:text-orange-500"
            >
              <span>HTML Media</span>
              {open.media ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open.media && (
              <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                <li className="cursor-pointer hover:text-orange-500">
                  Video & Audio Tags
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  SVG in HTML
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  iFrames in HTML
                </li>
              </ul>
            )}
          </li>

          {/* Misc */}
          <li>
            <div
              onClick={() => toggle("misc")}
              className="font-semibold flex justify-between items-center cursor-pointer hover:text-orange-500"
            >
              <span>Miscellaneous Tags</span>
              {open.misc ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open.misc && (
              <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                <li className="cursor-pointer hover:text-orange-500">
                  Code Tag
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  Semantic Tags
                </li>
                <li className="cursor-pointer hover:text-orange-500">Canvas</li>
              </ul>
            )}
          </li>
        </ul>
      </aside>

      {/* -------------------- MAIN CONTENT -------------------- */}
      <main className="flex-1 overflow-y-auto">
        {/* HERO SECTION */}
        <section className="py-20 text-center bg-orange-400 text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold drop-shadow-lg"
          >
            HTML Tutorial 🧡
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-xl opacity-90"
          >
            Learn HTML from Zero to Advanced — Step-by-Step.
          </motion.p>
        </section>

        {/* CONTENT BODY */}
        <div className="p-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-gray-600 mb-6 gap-2">
            <span className="cursor-pointer hover:text-orange-500">
              Tutorials
            </span>
            <FiChevronRight />
            <span className="text-orange-500 font-semibold">HTML Tutorial</span>
          </div>

          {/* Intro Box */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h1 className="text-4xl font-bold mb-4 text-center">
              HTML Tutorial
            </h1>
            <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
              HyperText Markup Language (HTML) is the standard language used to
              create web pages. It structures the content on the web using a
              system of tags and elements.
            </p>
          </div>

          {/* Get Started */}
          <div className="mt-10 bg-white p-8 shadow rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
            <p className="text-gray-700">
              Begin your web development journey by exploring each topic
              step-by-step!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
