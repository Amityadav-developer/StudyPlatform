// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="text-white py-32 text-center"
        style={{ background: 'linear-gradient(to right, #3b82f6, #6366f1)' }}
      >
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl mb-8">We are here to help you achieve your goals.</p>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-20 flex justify-center">
        <form className="bg-white p-10 rounded-xl shadow-md w-full max-w-lg flex flex-col gap-6">
          <input type="text" placeholder="Your Name" className="border border-gray-300 p-3 rounded"/>
          <input type="email" placeholder="Your Email" className="border border-gray-300 p-3 rounded"/>
          <textarea placeholder="Your Message" className="border border-gray-300 p-3 rounded h-32"/>
          <button className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
