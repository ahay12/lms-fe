import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex w-full items-center bg-white fixed top-0 left-0 shadow-sm z-10">
            <div className="w-full h-[70px] md:h-[99px] border-b border-solid border-gray-200 flex items-center justify-between px-4 md:px-8">
                <div className="flex items-center">
                    {/* Logo */}
                    <img
                        className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
                        alt="Logo"
                        src="/Logo.png"
                    />

                    {/* Mode Button */}
                    <button className="bg-black ml-4 md:ml-8 rounded-lg px-3 py-1 md:px-4 md:py-2 font-normal text-sm md:text-lg text-white">
                        Mode
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-8 items-center">
                    {["Beranda", "Kategori", "Materi", "Statistik", "Profil", "Forum"].map((item) => (
                        <a key={item} href="#" className="font-normal text-gray-700 text-sm md:text-lg">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-gray-700 text-2xl focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[70px] left-0 w-full bg-white shadow-md py-4">
                    <nav className="flex flex-col gap-4 items-center">
                        {["Beranda", "Kategori", "Materi", "Statistik", "Profil", "Forum"].map((item) => (
                            <a key={item} href="#" className="font-normal text-gray-700 text-lg">
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
