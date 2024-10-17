import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [customerID, setCustomerID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <div className="flex min-h-screen">

      {/* Right side with the login form */}
      <div className="w-1/2 flex justify-center items-center bg-gradient-to-tl from-orange-600 via-orange-400 to-orange-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden'
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-400">
              Welcome Back!
            </h2>

            <form onSubmit={handleLogin}>
              <Input
                icon={Terminal}
                type='text'
                placeholder='Customer ID'
                value={customerID}
                onChange={(e) => setCustomerID(e.target.value)}
              />
              <Input
                icon={Mail}
                type='text'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                icon={Lock}
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className='flex justify-center items-center mt-4'>
                <Link to="/forgot-password" className="text-sm text-gray-600 hover:underline">
                  Forgot Password?
                </Link>
                {error && <p className="text-red-500 font-semibold">{error}</p>}
              </div>

              <motion.button
                className='mt-5 w-full py-3 px-4 bg-orange-400 text-white font-bold text-xl rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'>
                Login
              </motion.button>
            </form>
          </div>

          <div className='p-4 bg-gray-50 text-center'>
            <p className='text-sm text-gray-700'>
              Don't have an account?{" "}
              <Link to='/signup' className='text-blue-500 hover:underline'>
                Sign Up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Left side with the illustration */}
      <div className="w-1/2 bg-gradient-to-tr from-orange-600 via-orange-400 to-orange-600 flex justify-center items-center">
        {/* Add your illustration here */}
        <img src={"../public/consulting.svg"} alt="Login Illustration" className="w-3/4 h-auto" />
      </div>

    </div>
  );
};

export default LoginPage;
