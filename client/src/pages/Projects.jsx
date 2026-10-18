// src/pages/Projects.jsx
export default function Projects() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="text-white py-32 text-center"
        style={{ background: 'linear-gradient(to right, #4f46e5, #9333ea)' }}
      >
        <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl mb-8">Hands-on projects to apply your skills in real scenarios.</p>
      </section>

      {/* Project Cards */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">Web Dev Projects</h3>
          <p>Build websites, landing pages, and full-stack apps.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">AI & ML Projects</h3>
          <p>Create AI models and automation tools.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">Electronics Projects</h3>
          <p>IoT, circuits, embedded systems & simulations.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Start Your Project Journey Today!</h2>
        <button className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition">
          Explore Projects
        </button>
      </section>
    </div>
  );
}
