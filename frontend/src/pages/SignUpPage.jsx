import { motion } from "framer-motion";
import Input from "../components/Input";
import { Link, useNavigate } from 'react-router-dom';

import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";


const SignUpPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { signup, error } = useAuthStore();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await signup(name, email, password);
            navigate("/verify-email");
        } catch (error) {
            console.log("Signup failed: ", error.message);
        }
    };

    return (
      <div className="flex min-h-screen">

        {/* Right side with the signup form */}
        <div className="w-1/2 flex justify-center items-center bg-gradient-to-tl from-orange-600 via-orange-400 to-orange-600">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden'
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-orange-400">
                Create Account
              </h2>
              <form onSubmit={handleSignUp}>
                <Input
                  icon={User}
                  type='text'
                  placeholder='Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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

                {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

                <motion.button
                  className='mt-5 w-full py-3 px-4 bg-orange-400 text-white font-bold text-xl rounded-lg shadow-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='submit'>
                  Sign Up
                </motion.button>
              </form>
            </div>
            <div className='px-8 py-4 bg-gray-50 flex justify-center'>
              <p className='text-sm text-black'>
                Already have an account?{" "}
                <Link to={"/login"} className='text-orange-400 hover:underline'>
                  Login
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Left side with the illustration */}
        <div className="w-1/2 bg-gradient-to-tr from-orange-600 via-orange-400 to-orange-600 flex justify-center items-center">
          {/* Add your illustration here */}
          <img src={"../public/consulting.svg"} alt="Sign Up Illustration" className="w-3/4 h-auto" />
        </div>

      </div>
    );
};

export default SignUpPage;
