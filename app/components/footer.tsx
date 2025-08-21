import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-linear-to-b from-[#16166B] to-gray-900">
            <div className="mx-auto w-full max-w-screen-xl px-12 sm:px-22 py-8 sm:py-6 lg:py-8">
                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    {/* Logo and Title */}
                    <div className="w-full md:w-1/2 mb-2">
                    <Link href="#" className="flex items-center gap-4">
                        <Image 
                            src="/images/logo-unimatics.svg" 
                            alt="Logo" 
                            width={100} 
                            height={100} 
                            priority 
                            className="w-8 h-auto"
                        />
                        <p className="font-bold text-2xl pr-8">UniMatics</p>
                    </Link>
                        <p className="pt-8 text-start">UniMatics merupakan komunitas non-profit yang berfokus pada pengembangan skill individu, agar individu dapat mempersiapkan diri lebih dini sebelum memasuki dunia kerja. Di UniMatics, kamu akan mendapatkan banyak pelatihan baik <span className="italic mr-1">hard-skill</span> maupun <span className="italic mr-1">soft-skill.</span></p>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-[#f8f8f8] uppercase">
                                Jelajahi
                            </h2>
                            <ul className="text-[#f8f8f8] text-sm">
                                <li className="mb-2">
                                    <Link href="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/artikel" className="hover:underline">
                                        About UniMatics
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/profil/" className="hover:underline">
                                        Learning Path
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-[#f8f8f8] uppercase">
                                Ikuti kami
                            </h2>
                            <ul className="text-[#f8f8f8] text-sm">
                                <li className="mb-2"><a href="https://www.instagram.com/polsekbendo31?igsh=MWc2N3V4NHB5amZ2OA==" className="hover:underline">Instagram</a></li>
                                <li className="mb-2"><a href="https://wa.me/6281234619123" className="hover:underline">Tiktok</a></li>
                                <li className="mb-2"><a href="https://wa.me/6281234619123" className="hover:underline">LinkedIn</a></li>
                                <li className="mb-2"><a href="https://wa.me/6281234619123" className="hover:underline">Github</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-[#f8f8f8] uppercase">
                                ketentuan
                            </h2>
                            <ul className="text-[#f8f8f8] text-sm">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-center text-sm text-gray-500 dark:text-gray-400 gap-4">
                    <span>
                        © 2025 <a href="#" className="hover:underline">UniMatics™</a>. All Rights Reserved.
                    </span>
                    <span>
                        Website by <a href="https://lawu-digital.vercel.app" target="_blank" rel="noopener noreferrer" className="font-bold">UniMatics Web Division</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
