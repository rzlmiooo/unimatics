// komponen navbar + sidebar
// bisa di import pas buat page baru

'use client'

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <nav className="fixed w-full flex justify-between items-center px-8 xl:px-16 py-4 bg-[#16166B]/80 backdrop-blur-md  z-20">
        <ul className="flex items-center gap-8 font-medium">
          {/* iki link logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image src="/images/logo-unimatics.svg" alt="Logo" width={100} height={100} priority className="w-8 h-auto"/>
            <p className="font-bold text-2xl pr-8 bg-gradient-to-r from-[#f8f8f8] to-[#f8f8f8] hover:from-yellow-400 hover:to-blue-500 bg-clip-text text-transparent transition-colors duration-300 ease-in-out shadow-md">UniMatics</p>
          </Link>
          {/* iki link ke dalam page */}
          <li><Link href="/" className="text-base font-bold hover:text-lg transform duration-300 hidden lg:block">Home</Link></li>
          <li><Link href="/about" className="text-base font-bold hover:text-lg transform duration-300 hidden lg:block">About</Link></li>
          <li><Link href="/learning-path" className="text-base font-bold hover:text-lg transform duration-300 hidden lg:block">Learning Path</Link></li>
        </ul>
        {/* iki link keluar page */}
        <ul className="hidden lg:flex items-center gap-5 font-bold text-[#f8f8f8]">
          <li><a href="https://www.tiktok.com/@universeinformatics/" target="_blank" className=""><Image src="/images/tiktok.svg" alt="linkedin" width={100} height={100} className="invert w-6 hover:w-8 h-auto transform duration-300"/></a></li>
          <li><a href="https://www.instagram.com/unimaticscommunity/" target="_blank" className=""><Image src="/images/instagram.svg" alt="linkedin" width={100} height={100} className="invert w-6 hover:w-8 h-auto transform duration-300"/></a></li>
          <li><a href="https://github.com/rzlmiooo/unimatics" target="_blank" className=""><Image src="/images/github.svg" alt="linkedin" width={100} height={100} className="invert w-6 hover:w-8 h-auto transform duration-300"/></a></li>
          <li><a href="https://www.linkedin.com/company/unimatics-unipmaverse-informatics/" target="_blank" className=""><Image src="/images/linkedin.svg" alt="linkedin" width={100} height={100} className="invert w-6 hover:w-8 h-auto transform duration-300"/></a></li>
          <li><Link href="/" className="rounded-2xl bg-gradient-to-r from-[#f8f8f8] to-[#f8f8f8] hover:bg-gradient-to-r hover:from-yellow-300 hover:to-blue-400 transition-colors ease-in-out duration-300 text-gray-900 px-4 py-2">Join UniMatics</Link></li>
        </ul>
        {/* iki tombol menu - khusus tampilan mobile */}
        {!isOpen && (
          <button 
            className="fixed right-10 block lg:hidden z-50 text-[#f8f8f8]"
            onClick={() => setIsOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button> 
        )}
       </nav>
       {/* iki animasi + sidebar */}
       <AnimatePresence>
       {isOpen && (
         <>
            {/* iki efek blur background */}
            <motion.button 
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)} 
              className="flex fixed z-30 top-0 h-screen w-full overflow-hidden backdrop-blur-sm"
            />
            <motion.aside 
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col justify-start items-start p-8 fixed z-30 top-0 right-0 w-2/3 h-dvh bg-linear-to-r from-[#161688] to-gray-900"
           >
              {/* iki tombol close */}
              <button 
                className="fixed top-5 right-10 block sm:hidden z-50 text-[#f8f8f8]"
                onClick={() => setIsOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              {/* konten sidebar */}
              <ul className="flex flex-col items-start gap-6 font-medium text-[#f8f8f8] border-b pb-6 pt-12">
                {/* link logo */}
                <Link href="/" className="flex items-center gap-4 border-b pb-6">
                  <Image src="/images/logo-unimatics.svg" alt="Logo" width={100} height={100} priority className="w-8 h-auto"/>
                  <p className="font-bold text-2xl pr-8">UniMatics</p>
                </Link>
                {/* link internal */}
                <li><Link href="/" className="text-base">Home</Link></li>
                <li><Link href="/about" className="text-base">About</Link></li>
                <li><Link href="/learning-path" className="text-base">Learning Path</Link></li>
              </ul>
              {/* link external */}
              <p className="font-bold pt-6 text-[#f8f8f8]">Follow Us:</p>
              <ul className="grid grid-cols-2 grid-rows-3 items-center justify-center gap-6 font-bold text-[#f8f8f8] pt-6">
                <li className="row-span-1"><a href="https://www.tiktok.com/@universeinformatics/" target="_blank"><Image src="/images/tiktok.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
                <li className="row-span-1"><a href="https://www.instagram.com/unimaticscommunity/" target="_blank"><Image src="/images/instagram.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
                <li className="row-span-1"><a href="https://github.com/rzlmiooo/unimatics" target="_blank"><Image src="/images/github.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
                <li className="row-span-1"><a href="https://www.linkedin.com/company/unimatics-unipmaverse-informatics/" target="_blank"><Image src="/images/linkedin.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
                <li className="col-span-2 mt-4"><Link href="/" className="rounded-2xl bg-[#f8f8f8] text-gray-900 px-4 py-2">Join UniMatics</Link></li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      </>
    )
}