/* eslint-disable no-unused-vars */
export default function Tutorials() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* --------------------------- HERO SECTION --------------------------- */}
      <section
        className="text-white py-32 text-center"
        style={{
          background: "linear-gradient(to right, #facc15, #fb923c)",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Learn With Step-by-Step Tutorials
        </h1>
        <p className="text-xl opacity-90">
          Start learning from zero to expert.
        </p>
      </section>

      {/* --------------------------- TUTORIAL SECTION --------------------------- */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Start Learning Tutorials</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {/* HTML Tutorial */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img src="/images.png" className="w-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">HTML Tutorial</h3>
            <p className="text-gray-500 mb-4">
              Learn HTML from basics to expert
            </p>
            <a
              href="/Html"
              className="bg-black text-white py-2 px-6 rounded-lg inline-block"
            >
              Start Learning
            </a>
          </div>

          {/* CSS Tutorial */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img src="/css1.png" className="w-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">CSS Tutorial</h3>
            <p className="text-gray-500 mb-4">Master modern web styling</p>
            <a
              href="/tutorials/css"
              className="bg-black text-white py-2 px-6 rounded-lg inline-block"
            >
              Start Learning
            </a>
          </div>

          {/* JavaScript Tutorial */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img src="/jss1.jpeg" className="w-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">JavaScript Tutorial</h3>
            <p className="text-gray-500 mb-4">Become a JS Pro developer</p>
            <a
              href="/tutorials/javascript"
              className="bg-black text-white py-2 px-6 rounded-lg inline-block"
            >
              Start Learning
            </a>
          </div>

          {/* Python Tutorial */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img src="/py.png" className="w-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Python Tutorial</h3>
            <p className="text-gray-500 mb-4">Learn Python the easy way</p>
            <a
              href="/tutorials/python"
              className="bg-black text-white py-2 px-6 rounded-lg inline-block"
            >
              Start Learning
            </a>
          </div>
        </div>
      </section>

      {/* --------------------------- ADVANCED TUTORIAL CARDS --------------------------- */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Advance Tutorials</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {/* React */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img src="/react.png" className="w-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">React JS Tutorial</h3>
            <p className="text-gray-500 mb-4">Learn component-based UI</p>
            <a
              href="/tutorials/react"
              className="bg-black text-white py-2 px-6 rounded-lg inline-block"
            >
              Start Learning
            </a>
          </div>

          {/* Node */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img src="/node.png" className="w-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Node JS Tutorial</h3>
            <p className="text-gray-500 mb-4">Backend development made easy</p>
            <a
              href="/tutorials/node"
              className="bg-black text-white py-2 px-6 rounded-lg inline-block"
            >
              Start Learning
            </a>
          </div>

          {/* SQL */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img src="/sql.png" className="w-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">SQL Tutorial</h3>
            <p className="text-gray-500 mb-4">Master database queries</p>
            <a
              href="/tutorials/sql"
              className="bg-black text-white py-2 px-6 rounded-lg inline-block"
            >
              Start Learning
            </a>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img src="/cyber.png" className="w-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Cyber Security</h3>
            <p className="text-gray-500 mb-4">Learn ethical hacking basics</p>
            <a
              href="/tutorials/cyber"
              className="bg-black text-white py-2 px-6 rounded-lg inline-block"
            >
              Start Learning
            </a>
          </div>
        </div>
      </section>

      {/* --------------------------- EXTRA CATEGORY BOXES --------------------------- */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">More Helpful Tutorials</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {["C", "C++", "Java", "Django"].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <img src="/book.png" className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold">{item} Tutorial</h3>
              <p className="text-gray-500 mb-4">Complete {item} Guide</p>
              <a className="bg-black text-white py-2 px-6 rounded-lg inline-block">
                Start Learning
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
