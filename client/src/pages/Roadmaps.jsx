// src/pages/Roadmaps.jsx
export default function Roadmaps() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="text-white py-32 text-center"
        style={{ background: 'linear-gradient(to right, #facc15, #f97316)' }}
      >
        <h1 className="text-5xl font-bold mb-4">Learning Roadmaps</h1>
        <p className="text-xl mb-8">Step-by-step guides to become industry-ready.</p>
      </section>

      {/* Roadmap Cards */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">Web Development Roadmap</h3>
          <p>From basics HTML/CSS to advanced React & full-stack apps.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">AI & ML Roadmap</h3>
          <p>Learn Python, ML models, AI projects, and deployment.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">Electronics & VLSI Roadmap</h3>
          <p>Understand circuits, embedded systems, and VLSI design.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Follow the Roadmap & Achieve Your Goals!</h2>
        <button className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition">
          Start Learning
        </button>
      </section>
    </div>
  );
}
