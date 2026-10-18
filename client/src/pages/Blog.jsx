// src/pages/Blog.jsxp
export default function Blog() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="text-white py-32 text-center"
        style={{ background: "linear-gradient(to right, #10b981, #14b8a6)" }}
      >
        <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl mb-8">
          Stay updated with latest tutorials, news, and guides.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">Web Development Tips</h3>
          <p>Latest tricks, libraries, and tools to enhance your skills.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">AI & ML Insights</h3>
          <p>Deep dive into AI trends, frameworks, and project ideas.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">Electronics & VLSI Updates</h3>
          <p>Industry updates, tools, and hands-on electronics guides.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Read Our Blog & Stay Ahead!</h2>
        <button className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition">
          Visit Blog
        </button>
      </section>
    </div>
  );
}
