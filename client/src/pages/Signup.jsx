// src/pages/Signup.jsx
export default function Signup() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)' }}
    >
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>
        
        <form className="flex flex-col gap-5">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button 
            type="submit"
            className="bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
          >
            Signup
          </button>
        </form>

        <p className="text-center mt-5 text-black-200">
          Already have an account? <a href="/login" className="text-black font-bold">Login</a>
        </p>
      </div>
    </div>
  );
}
