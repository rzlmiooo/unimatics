"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";

export default function NotFound() {
  return (
    <>
    <Navbar />
    <div suppressHydrationWarning className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#161688] via-purple-800 to-indigo-700 text-white px-6">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl md:text-9xl font-extrabold mb-4 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="text-xl md:text-3xl text-gray-200 text-center max-w-lg"
      >
        Welahdalah cik, page ini belum dimasak sama mas atmin kayaknya. Tapi sinyal mu yang jelek juga bisa loh ya😂
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-block rounded-lg bg-white text-indigo-800 px-8 py-3 text-lg font-semibold shadow-lg hover:scale-105 hover:bg-gray-100 transition transform"
        >
          Balik ke Beranda
        </Link>
      </motion.div>
    </div>
    </>
  );
}
