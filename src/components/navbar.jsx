import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export default function Navbar({ name = '' }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        // Load theme from sessionStorage or default to 'light'
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('theme', newTheme); // Save the theme in sessionStorage
        }
    };

    useEffect(() => {
        // Apply the theme on mount and when theme changes
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark');
        } else {
            document.querySelector('html')?.classList.remove('dark');
        }
    }, [theme]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex w-full items-center bg-white dark:bg-dark fixed top-0 left-0 shadow-sm z-10">
            <div className="w-full h-[70px] md:h-[99px] border-b border-solid border-b-gray-200 border-white dark:border-b-white flex items-center justify-between px-4 md:px-8">
                <div className="flex items-center">
                    {/* Logo */}
                    <img
                        className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
                        alt="Logo"
                        src="/Logo.png"
                    />

                    {/* Mode Button - Only show on homepage */}
                    {typeof window !== 'undefined' && window.location.pathname === '/' && (
                        <button
                            onClick={changeTheme}
                            className="bg-black dark:bg-white dark:text-black ml-4 md:ml-8 rounded-lg px-3 py-1 md:px-4 md:py-2 font-normal text-sm md:text-lg text-white"
                        >
                            Mode
                        </button>
                    )}

                    <h1 className="ml-4 text-xl text-orange-400 font-semibold">{name}</h1>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-8 items-center">
                    {["Beranda", "Kategori", "Materi", "Statistik", "Profil", "Forum"].map((item) => (
                        <a
                            key={item}
                            href={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                            className="font-normal text-gray-700 dark:text-white text-sm md:text-lg"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-gray-700 dark:text-white text-2xl focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[70px] left-0 w-full bg-white dark:bg-dark shadow-md py-4">
                    <nav className="flex flex-col gap-4 items-center">
                        {["Beranda", "Kategori", "Materi", "Statistik", "Profil", "Forum"].map((item) => (
                            <a
                                key={item}
                                href={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                                className="font-normal text-gray-700 dark:text-white lg:text-lg text-base"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

// Prop validation
Navbar.propTypes = {
    name: PropTypes.string.isRequired,
};
