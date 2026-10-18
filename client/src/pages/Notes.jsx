// src/pages/Notes.jsx
export default function Notes() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* --------------------------- HERO SECTION --------------------------- */}
      <section
        className="text-white py-32 text-center"
        style={{ background: "linear-gradient(to right, #ec4899, #ef4444)" }}
      >
        <h1 className="text-5xl font-bold mb-4">Download Study Notes</h1>
        <p className="text-xl mb-8">
          Concise notes for fast learning and revision.
        </p>
      </section>

      {/* --------------------------- Download Handbooks --------------------------- */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Download Handbooks</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {/* Python Handbook */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
              className="w-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Python Handbook</h3>
            <p className="text-gray-500 mb-4">Download Handbook Here</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>

          {/* C Handbook */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
              className="w-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">C Handbook</h3>
            <p className="text-gray-500 mb-4">Download Handbook Here</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>

          {/* HTML Handbook */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888859.png"
              className="w-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">HTML Handbook</h3>
            <p className="text-gray-500 mb-4">Download Handbook Here</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>

          {/* SQL Handbook */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
              className="w-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">SQL Handbook</h3>
            <p className="text-gray-500 mb-4">Download Handbook Here</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------- NOTES SECTION --------------------------- */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Download Notes</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {/* Example Cards – Replace with your notes */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721269.png"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Python Notes</h3>
            <p className="text-gray-500 mb-4">Download Notes</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9526/9526914.png"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">C Notes</h3>
            <p className="text-gray-500 mb-4">Download Notes</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">HTML Notes</h3>
            <p className="text-gray-500 mb-4">Download Notes</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">SQL Notes</h3>
            <p className="text-gray-500 mb-4">Download Notes</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------- Download Cheatsheets --------------------------- */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Download Cheatsheets</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {/* Cheatsheet Examples */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Python Cheatsheet</h3>
            <p className="text-gray-500 mb-4">Download Cheatsheet</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">C Cheatsheet</h3>
            <p className="text-gray-500 mb-4">Download Cheatsheet</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888859.png"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">HTML Cheatsheet</h3>
            <p className="text-gray-500 mb-4">Download Cheatsheet</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
              className="w-28 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">SQL Cheatsheet</h3>
            <p className="text-gray-500 mb-4">Download Cheatsheet</p>
            <button className="bg-black text-white py-2 px-6 rounded-lg">
              Download
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
