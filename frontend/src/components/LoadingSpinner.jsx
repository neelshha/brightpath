import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Gradient Background */}
      <div className="w-1/2 flex justify-center items-center bg-gradient-to-tl from-orange-600 via-orange-400 to-orange-600">
      </div>

      {/* Centered Loading Spinner */}
      <div className="flex justify-center items-center w-full h-full absolute">
        <motion.div
          className="w-16 h-16 border-4 border-t-4 border-t-orange-500 border-yellow-100 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Right Gradient Background */}
      <div className="w-1/2 bg-gradient-to-tr from-orange-600 via-orange-400 to-orange-600 flex justify-center items-center">
      </div>
    </div>
  );
};

export default LoadingSpinner;
