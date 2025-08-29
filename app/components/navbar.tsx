'use client'

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <nav className="fixed w-full flex justify-between items-center px-8 xl:px-16 py-4 bg-[#16166B]/80 backdrop-blur-md shadow-md shadow-gray-900 z-20">
        <ul className="flex items-center gap-8 font-medium text-[#f8f8f8]">
          {/* logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image src="/images/logo-unimatics.svg" alt="Logo" width={100} height={100} priority className="w-8 h-auto"/>
            <p className="font-bold text-2xl pr-8">UniMatics</p>
          </Link>
          {/* internal links */}
          <li><Link href="/" className="text-base hidden lg:block">Home</Link></li>
          <li><a href="#" className="text-base hidden lg:block">About</a></li>
          <li><a href="#" className="text-base hidden lg:block">Learning Path</a></li>
        </ul>
        {/* extermal links */}
        <ul className="hidden lg:flex items-center gap-5 font-bold text-[#f8f8f8]">
          <li><a href="#" className=""><Image src="/images/tiktok.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
          <li><a href="#" className=""><Image src="/images/instagram.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
          <li><a href="#" className=""><Image src="/images/github.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
          <li><a href="#" className=""><Image src="/images/linkedin.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
          <li><a href="#" className="rounded-2xl bg-[#f8f8f8] text-gray-900 px-4 py-2">Join UniMatics</a></li>
        </ul>
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
       <AnimatePresence>
       {isOpen && (
         <>
           <motion.button 
             key="overlay"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setIsOpen(false)} 
             className="flex fixed z-30 top-0 h-screen w-full overflow-hidden backdrop-blur-sm"/>
           <motion.aside 
             key="sidebar"
             initial={{ x: "100%" }}
             animate={{ x: 0 }}
             exit={{ x: "100%" }}
             transition={{ type: "spring", stiffness: 300, damping: 30 }}
             className="flex flex-col justify-start items-start p-8 fixed z-30 top-0 right-0 w-2/3 h-dvh bg-linear-to-r from-[#161688] to-gray-900"
           >
             <button 
               className="fixed top-5 right-10 block sm:hidden z-50 text-[#f8f8f8]"
               onClick={() => setIsOpen(false)}
             >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
             </button>
             <ul className="flex flex-col items-start gap-6 font-medium text-[#f8f8f8] border-b pb-6 pt-12">
               {/* logo */}
               <Link href="/" className="flex items-center gap-4 border-b pb-6">
                 <Image src="/images/logo-unimatics.svg" alt="Logo" width={100} height={100} priority className="w-8 h-auto"/>
                 <p className="font-bold text-2xl pr-8">UniMatics</p>
               </Link>
               {/* internal as */}
               <li><Link href="/" className="text-base">Home</Link></li>
               <li><a href="#" className="text-base">About</a></li>
               <li><a href="#" className="text-base">Learning Path</a></li>
             </ul>
             {/* extermal as */}
             <p className="font-bold pt-6 text-[#f8f8f8]">Follow Us:</p>
             <ul className="grid grid-cols-2 grid-rows-3 items-center justify-center gap-6 font-bold text-[#f8f8f8] pt-6">
               <li className="row-span-1"><a href="#" className=""><Image src="/images/tiktok.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
               <li className="row-span-1"><a href="#" className=""><Image src="/images/instagram.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
               <li className="row-span-1"><a href="#" className=""><Image src="/images/github.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
               <li className="row-span-1"><a href="#" className=""><Image src="/images/linkedin.svg" alt="linkedin" width={100} height={100} className="invert w-6 h-auto"/></a></li>
               <li className="col-span-2 mt-4"><a href="#" className="rounded-2xl bg-[#f8f8f8] text-gray-900 px-4 py-2">Join UniMatics</a></li>
             </ul>
           </motion.aside>
         </>
       )}
      </AnimatePresence>
      </>
    )
}