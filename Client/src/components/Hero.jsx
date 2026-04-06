import React from "react";
import { Moon } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative w-full bg-[#f5f5f5] overflow-hidden">
            {/* Background Shape */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px]  bg-green-100/60 rotate-45 rounded-3xl blur-2xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* LEFT - ENGLISH */}
                <div className="space-y-6 text-left">
                    {/* Label */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-yellow-600 uppercase tracking-wide">
                        <Moon size={16} />
                        <span>WELCOME TO THE HOUSE OF ALLAH</span>
                    </div>

                    {/* Heading */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Masjid-e-Shahtola
                        </h1>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f5c3b]">
                            Khawaspur
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                        Dedicated to serving our community through spiritual
                        guidance, education, and charitable initiatives. Your
                        donations help maintain the mosque, support students,
                        and provide clean water to those in need.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-[#0f5c3b] text-white rounded-full font-medium shadow-md hover:bg-[#0c4a30] transition duration-300">
                            Quick Donate →
                        </button>

                        <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* RIGHT - URDU */}
                <div
                    dir="rtl"
                    className="space-y-6 text-right font-[Playfair Display, serif]"
                >
                    {/* Label */}
                    <p className="text-sm font-semibold text-yellow-600">
                        اللہ  کے گھر میں خوش آمدید
                    </p>

                    {/* Heading */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            مسجد شاہ ٹولہ
                        </h1>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f5c3b]">
                            خواص پور
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed">
                        ہماری مسجد روحانی رہنمائی، تعلیم اور فلاحی کاموں کے لیے
                        وقف ہے۔ آپ کا عطیہ مسجد کی دیکھ بھال، طلبہ کی مدد اور
                        ضرورت مندوں کے لیے صاف پانی فراہم کرنے میں مدد دیتا ہے۔
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-end">
                        <button className="px-6 py-3 bg-[#0f5c3b] text-white rounded-full font-medium shadow-md hover:bg-[#0c4a30] transition duration-300">
                            ← فوری عطیہ
                        </button>

                        <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition duration-300">
                            مزید جانیں
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
