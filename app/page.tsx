'use client'

import Image from "next/image";
import Footer from "./components/footer";
import { motion, Variants } from "framer-motion";
import Navbar from "./components/navbar";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  return (
    <div className="flex flex-col h-max bg-[#f8f8f8]">
      {/* Header */}
      <header className="relative w-full">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex flex-col">
        {/* hero section */}
        <section className="pt-32 sm:pt-40 xl:pt-70 pb-40 xl:pb-60 p-10 xl:p-20 flex flex-col-reverse sm:flex-row justify-center items-center gap-12 bg-linear-to-b from-[#30499D] to-[#16166B]">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex flex-col justify-center items-start gap-8 w-fit xl:w-full">
            <motion.h1 variants={item} className="text-5xl/tight xl:text-7xl/tight text-[#f8f8f8] text-shadow-lg shadow-gray-800 font-bold">Learn. Grow.<br/> Succeed. Repeat.</motion.h1>
            <motion.p variants={item} className="text-lg/normal xl:text-xl/normal text-[#f8f8f8] text-shadow-lg shadow-gray-800 w-auto sm:w-130 xl:w-full">Pengalaman nyata layaknya bekerja di industri bersama para Senior di <span className="font-bold">UniMatics</span>. Rasakan workflow yang nyata. Pengalaman adalah guru yang terbaik.</motion.p>
            <motion.a variants={item} href="#" className="flex justify-center items-center gap-4 bg-[#30499D] p-4 rounded-xl shadow-md shadow-gray-800 text-[#f8f8f8]">
              <p className="font-bold text-lg">Join UniMatics Sekarang</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </motion.div>
          <motion.div variants={item} initial="hidden" animate="show" className="flex justify-center items-center w-full">
            <Image
              src="/images/hero-section.png"
              alt="Hero"
              width={1080}
              height={720}
              priority
              className="w-full h-auto rounded-2xl shadow-xs shadow-gray-800"
            />
          </motion.div>
        </section>
        {/* heroine section */}
        <section className="py-50 sm:py-40 xl:py-60 p-10 xl:p-20 flex flex-col sm:flex-row justify-center items-center gap-12 bg-[#f8f8f8]">
          <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex justify-center items-center w-full">
            <Image
              src="/images/feature-section.png"
              alt="Hero"
              width={1080}
              height={720}
              priority
              className="w-full h-auto rounded-2xl shadow-xs shadow-gray-800"
            />
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex flex-col items-start gap-12 w-full">
            <motion.h2 variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-3xl/tight sm:text-5xl/tight xl:text-7xl/tight text-gray-900 text-start font-bold">
              Eh~ jangan
              <span className="relative italic pl-4 z-10">insecure
                <Image
                  src="/images/yellow-element.png"
                  alt="Yellow Line"
                  width={100}
                  height={50}
                  className="absolute bottom-0 right-0 -z-1 w-full"
                />
              </span><br/>
              dulu, karena<br/>
              IT nggak selalu<br/>
              <span className="pr-2">tentang</span>
              <span className="bg-[#f8f8f8] border-4 px-3 pb-2 border-[#161688]">
                coding
              </span>
            </motion.h2>
            <motion.a variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} href="/learning-path" className="flex justify-center items-center gap-4 bg-[#30499D] p-4 rounded-xl shadow-md shadow-gray-500 text-[#f8f8f8]">
              <p className="font-bold text-lg">Check Learning Path</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </motion.div>
        </section>
        {/* about section */}
        <section className="py-40 xl:py-80 p-10 xl:p-20 flex flex-col sm:flex-row justify-center items-center bg-linear-to-b from-[#30499D] to-[#16166B]">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex flex-col justify-center items-center gap-12 mx-30">
            <motion.h2 variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-4xl/normal sm:text-6xl/normal text-[#f8f8f8] font-bold text-start sm:text-center">Wait, 
              <span className="relative pl-4 sm:pr-4 z-10">
              UniMatics
              <Image
                src="/images/blue-element.png"
                alt="Blue Line"
                width={100}
                height={50}
                className="absolute -bottom-2 right-0 -z-1 w-full"
              />
              </span> 
              itu apa? Dan disana ngapain aja?
            </motion.h2>
            <motion.p variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="pb-12 text-[#f8f8f8] text-start sm:text-justify text-lg">UniMatics merupakan komunitas non-profit yang berfokus pada pengembangan skill individu, agar individu dapat mempersiapkan diri lebih dini sebelum memasuki dunia kerja. Di UniMatics, kamu akan mendapatkan banyak pelatihan baik <span className="italic mr-1">hard-skill</span> maupun <span className="italic mr-1">soft-skill.</span> Lanjut scroll!</motion.p>
            <motion.a href="#" variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex justify-center items-center gap-4 bg-[#30499D] p-4 rounded-xl shadow-md shadow-gray-800 text-[#f8f8f8]">
              <p className="font-bold text-lg">More About Unimatics</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </motion.div>
        </section>
        {/* learning path section */}
        <section className="py-36 xl:py-52 p-10 xl:p-20 flex flex-col justify-center items-center gap-12 bg-[#f8f8f8]">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex items-center">
            <motion.h2 variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-gray-900 text-3xl sm:text-4xl text-start sm:text-center font-bold sm:mx-24">Di UniMatics, kamu bisa mempelajari bidang IT yang diperlukan industri, baik coding maupun non-coding.</motion.h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 sm:grid-cols-3 grid-rows-1 sm:grid-rows-2 gap-4">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="row-span-1 flex flex-col justify-start items-start gap-4 p-6 border border-gray-500 rounded-xl my-1">
              <Image
                src="/images/thumbnail-element.png"
                alt="Thumbnail"
                width={500}
                height={400}
                className="inset-shadow-sm/100 w-full antialiased rounded-2xl"
              />
              <h3 className="font-bold text-lg text-gray-900">Content Creator</h3>
              <h5 className="text-sm text-gray-500">#Non-Coding</h5>
              <p className="font-medium text-gray-900">Skill yang bisa dipelajari: Videografi, Fotografi, dan Editing</p>
            </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="row-span-1 flex flex-col justify-start items-start gap-4 p-6 border border-gray-500 rounded-xl my-1">
              <Image
                src="/images/thumbnail-element.png"
                alt="Thumbnail"
                width={500}
                height={400}
                className="inset-shadow-sm/100 w-full antialiased rounded-2xl"
              />
              <h3 className="font-bold text-lg text-gray-900">Frontend Engineer</h3>
              <h5 className="text-sm text-gray-500">#Coding</h5>
              <p className="font-medium text-gray-900">Skill yang bisa dipelajari: HTML, CSS, JS, RESTFul API, React, Next.js, Tailwind CSS</p>
            </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="row-span-1 flex flex-col justify-start items-start gap-4 p-6 border border-gray-500 rounded-xl my-1">
              <Image
                src="/images/thumbnail-element.png"
                alt="Thumbnail"
                width={500}
                height={400}
                className="inset-shadow-sm/100 w-full antialiased rounded-2xl"
              />
              <h3 className="font-bold text-lg text-gray-900">Graphic Designer</h3>
              <h5 className="text-sm text-gray-500">#Non-Coding</h5>
              <p className="font-medium text-gray-900">Skill yang bisa dipelajari: UI/UX dan Desain Feed Sosmed</p>
            </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="row-span-1 flex flex-col justify-start items-start gap-4 p-6 border border-gray-500 rounded-xl my-1">
              <Image
                src="/images/thumbnail-element.png"
                alt="Thumbnail"
                width={500}
                height={400}
                className="inset-shadow-sm/100 w-full antialiased rounded-2xl"
              />
              <h3 className="font-bold text-lg text-gray-900">Backend Engineer</h3>
              <h5 className="text-sm text-gray-500">#Coding</h5>
              <p className="font-medium text-gray-900">Skill yang bisa dipelajari: REST API, PHP, Laravel, Node.js, Bun.js, Express.js, dan Golang</p>
            </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="row-span-1 flex flex-col justify-start items-start gap-4 p-6 border border-gray-500 rounded-xl my-1">
              <Image
                src="/images/thumbnail-element.png"
                alt="Thumbnail"
                width={500}
                height={400}
                className="inset-shadow-sm/100 w-full antialiased rounded-2xl"
              />
              <h3 className="font-bold text-lg text-gray-900">Machine Learning</h3>
              <h5 className="text-sm text-gray-500">#Coding</h5>
              <p className="font-medium text-gray-900">Skill yang bisa dipelajari: Deep Learning, LLM, yOLO</p>
            </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="row-span-1 flex flex-col justify-start items-start gap-4 p-6 border border-gray-500 rounded-xl my-1">
              <Image
                src="/images/thumbnail-element.png"
                alt="Thumbnail"
                width={500}
                height={400}
                className="inset-shadow-sm/100 w-full antialiased rounded-2xl"
              />
              <h3 className="font-bold text-lg text-gray-900">3D Animator</h3>
              <h5 className="text-sm text-gray-500">#Non-Coding</h5>
              <p className="font-medium text-gray-900">Skill yang bisa dipelajari: Modelling, Sculpting, Rigging, Texturing, dan Animating</p>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <Footer/>
      </motion.footer>
    </div>
  );
}
