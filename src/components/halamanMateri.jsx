import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";



export default function HalamanMateri() {
    const [isFocused, setIsFocused] = useState({ section: null, button: null });

    const handleFocus = (sectionId, buttonId) => {
        setIsFocused({ section: sectionId, button: buttonId });
    };

    const handleBlur = () => {
        setIsFocused({ section: null, button: null });
    };

    const sections = [
        { id: 1, title: "Olahraga Aman Untuk Lansia" },
        { id: 2, title: "Panduan Dasar Menggunakan Smartphone" },
        { id: 3, title: "Pengelolan Keuangan Pribadi" },
        { id: 4, title: "Memilih Tanaman Yang Mudah Dirawat" }
    ];

    const renderButtons = (sectionId) => (
        [1, 2, 3].map((buttonId) => (
            <button
                key={buttonId}
                className="w-10/12 h-24 m-4 border-gray border shadow-sm rounded-md focus:ring-1 focus:ring-orange-200"
                onFocus={() => handleFocus(sectionId, buttonId)}
                onBlur={handleBlur}
            >
                <div className="p-3 flex justify-between">
                    <p className="font-semibold lg:text-base text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                    <span className={`p-2 bg-gray flex gap-x-1 ${isFocused.section === sectionId && isFocused.button === buttonId ? 'bg-orange-100' : 'bg-secondary'} rounded-md`}>
                        <img src="/time.png" alt="img" />
                        43 Menit
                    </span>
                </div>
                <p className="pl-3 -mt-3 text-[#7d7d7d] text-left lg:text-base text-xs">Pembelajaran {buttonId}</p>
            </button>
        ))
    );

    return (
        <>
            <Navbar />
            <h1 className="container uppercase text-4xl pt-32 max-w-7xl mx-auto font-semibold dark:text-white">Halaman Materi</h1>

            <div className="container grid lg:grid-cols-2 max-w-7xl mx-auto pt-32 gap-x-10">
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/NpgA62suLuI"
                        title="Tips Melakukan Pola Hidup Sehat untuk Lansia"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="rounded-md w-full h-96"
                        allowfullscreen>

                    </iframe>
                </div>
                <div>
                    <h2 className="font-semibold lg:text-4xl text-3xl dark:text-white">Olahraga Aman Untuk Lansia</h2>
                    <p className="lg:pt-20 pt-10 dark:text-white">Olahraga atau aktivitas fisik untuk lansia perlu disesuaikan dengan kemampuan dan kondisi manula yang bersangkutan. Anda dapat memulainya dengan sesi konsultasi untuk memperoleh rekomendasi tipe aktivitas yang cocok dan batasan yang masih aman untuk tubuh mereka.</p>
                </div>
            </div>
            <div className="flex justify-end lg:mr-20 mr-5 pt-20 pb-5">
                <button className="w-40 h-12 bg-green-300 rounded-3xl font-semibold shadow-md">Tanya Pengajar</button>
            </div>
            {/* Materi */}
            <div className="max-w-7xl grid lg:grid-cols-2 gap-8 mx-auto">
                {sections.map((section) => (
                    <div key={section.id} className="w-full h-auto pb-10 bg-white rounded-md">
                        <h1 className="text-right pr-10 pt-10 text-3xl font-bold">0{section.id}</h1>
                        <h3 className="font-semibold text-lg pl-10">{section.title}</h3>
                        <div className="mx-auto mt-10 flex flex-col my-3 justify-center items-center">
                            {renderButtons(section.id)}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
};
