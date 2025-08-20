'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-[#f8f8f8]">
      <header className="w-full">
       <nav className="flex justify-between items-center p-4 bg-[#01355f]">
        {/* logo */}
        <Image src="/images/logo-unimatics.svg" alt="Logo" width={100} height={100} priority className="w-8 h-auto"/>
        {/* internal links */}
        <ul className="">
          <li><Link href="/" className=""></Link></li>
          <li><Link href="/" className=""></Link></li>
          <li><Link href="/" className=""></Link></li>
          <li><Link href="/" className=""></Link></li>
        </ul>
        {/* extermal links */}
        <ul className="">
          <li><Link href="/" className=""><Image src="/images/linkedin.svg" alt="Linkedin" width={100} height={100}/></Link></li>
        </ul>
       </nav>
      </header>
      <main className="">
        {/* hero section */}
        <section className=""></section>
        {/* feature section */}
        <section className=""></section>
        {/* future updates */}
        <section className=""></section>
      </main>
      <footer className="">
        {/* logo, description, terms */}
        <div className=""></div>
        {/* internal links */}
        <div className=""></div>
        {/* tags, ecternal links, etc */}
        <div className=""></div>
      </footer>
    </div>
  );
}
