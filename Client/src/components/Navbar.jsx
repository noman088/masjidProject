import React from "react";
import { Heart } from "lucide-react";

const Navbar = () => {
    return (
        <header className="w-full bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* LEFT - LOGO */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0f5c3b] rounded-full flex items-center justify-center text-white text-lg">
                        🕌
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-gray-900 tracking-wide">
                            MASJID-E-SHAHTOLA
                        </h1>
                        <p className="text-xs text-gray-500 rtl">
                            مسجد شاہ ٹولہ
                        </p>
                    </div>
                </div>

                {/* CENTER - NAV LINKS */}
                <nav className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-600">
                    <a
                        href="#"
                        className="text-[#0f5c3b]  border-[#0f5c3b] pb-1"
                    >
                        Home
                    </a>
                    <a href="#" className="hover:text-[#024126] transition">
                        Donate
                    </a>
                    <a href="#" className="hover:text-[#0f5c3b] transition">
                        About
                    </a>
                    <a href="#" className="hover:text-[#0f5c3b] transition">
                        Contact
                    </a>
                    <a href="#" className="hover:text-[#0f5c3b] transition">
                        Gallery
                    </a>
                    <a href="#" className="hover:text-[#0f5c3b] transition">
                        Impact Stories
                    </a>
                    <a href="#" className="hover:text-[#0f5c3b] transition">
                        FAQs
                    </a>
                </nav>

                {/* RIGHT - LANGUAGE + BUTTON */}
                <div className="flex items-center gap-4">
                    {/* Language Toggle */}
                    <div className="flex items-center bg-gray-100 rounded-full p-1 text-sm">
                        <button className="px-3 py-1 rounded-full bg-[#0f5c3b] text-white">
                            EN
                        </button>
                        <button className="px-3 py-1 text-gray-600 font-[Noto_Nastaliq_Urdu]">
                            اردو
                        </button>
                    </div>

                    {/* Donate Button */}
                    <button className="flex items-center gap-2 px-5 py-2 bg-[#0f5c3b] text-white rounded-full font-medium shadow-sm hover:bg-[#0c4a30] transition">
                        <Heart size={16} />
                        Donate Now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
