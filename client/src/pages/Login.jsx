// src/pages/Login.jsx
export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(to right, #4f46e5, #9333ea)' }}
    >
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h2>
        
        <form className="flex flex-col gap-5">
          <input 
            type="email" 
            placeholder="Email" 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5 text-black-200">
          Don't have an account? <a href="/signup" className="text-black font-bold">Signup</a>
        </p>
      </div>
    </div>
  );
}
