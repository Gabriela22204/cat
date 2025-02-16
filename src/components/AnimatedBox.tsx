"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedBox() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      
      <motion.div
        className="w-20 h-20 bg-blue-500 rounded-lg"
        animate={{
          y: isAnimating ? [0, -100, 0] : 0, // Animação de pulo
          rotate: isAnimating ? [0, 360] : 0, // Rotação
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }} 
      /> ₍^. .^₎⟆
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="mt-5 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
      >
        Jump!
      </button>
      
    </div>
  );
}
