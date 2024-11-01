import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import Navbar from "./navbar";
import Footer from "./footer";
import useDocumentTitle from "../lib/useDocumentTitle";

Chart.register(...registerables);

export default function Statistik() {
    useDocumentTitle('Statistik')
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = document.getElementById("chartBar");

        // Destroy the chart instance if it already exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create a new chart instance and save it in the ref
        if (ctx) {
            chartRef.current = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [
                        {
                            label: "Minggu lalu",
                            data: [300, 400, 300, 500, 250, 350, 450],
                            backgroundColor: "rgba(251, 125, 91, 1)",
                            borderColor: "rgba(251, 125, 91, 1)",
                            borderWidth: 1
                        },
                        {
                            label: "Minggu ini",
                            data: [242, 546, 464, 323, 234, 234, 535],
                            backgroundColor: "rgba(252, 196, 62, 1)",
                            borderColor: "rgba(252, 196, 62, 1)",
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Cleanup function to destroy the chart on component unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="container max-w-7xl mx-auto space-y-10">
                <div className="pt-32">
                    <h1 className="uppercase text-3xl font-bold dark:text-white">statistik pengguna</h1>
                </div>
                {/*  */}
                <div className="bg-white dark:bg-[#262626] w-full h-auto p-5 rounded-b-md">
                    <h2 className="p-5 dark:text-white">Grafik Kunjungan</h2>
                    <canvas id="chartBar"></canvas>
                </div>
                {/*  */}
                <div className="bg-white dark:bg-[#262626] w-full h-auto pb-8 container">
                    <h3 className="p-5 dark:text-white">Materi Populer</h3>
                    <div className="grid grid-rows-5 gap-y-5">
                        {/* 1 */}
                        <div className="grid grid-cols-5 place-items-center">
                            {/* Col 1 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="text-[#303972] font-semibold lg:text-base text-xs">Judul Materi</div>
                            </div>
                            {/* Col 2 */}
                            <div className="text-[#303972] font-semibold lg:text-base text-xs">ID 12345678</div>
                            {/* Col 3 */}
                            <div className="flex items-center gap-2">
                                <img src="/icon.png" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="lg:text-base text-xs">
                                    <p className="dark:text-white">Class</p>
                                    <p className="text-[#303972] font-semibold">VII</p>
                                </div>
                            </div>
                            {/* Col 4 */}
                            <div className="dark:text-white text-xs">
                                <p>Views</p>
                                <p>100</p>
                            </div>
                            {/* Col 5 */}
                            <div className="flex lg:gap-x-10 gap-x-5">
                                <button>
                                    <img src="/print.png" alt="img" />
                                </button>
                                <button>
                                    <img src="/Dots.png" alt="img" />
                                </button>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="grid grid-cols-5 place-items-center">
                            {/* Col 1 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="text-[#303972] font-semibold lg:text-base text-xs">Judul Materi</div>
                            </div>
                            {/* Col 2 */}
                            <div className="text-[#303972] font-semibold lg:text-base text-xs">ID 12345678</div>
                            {/* Col 3 */}
                            <div className="flex items-center gap-2">
                                <img src="/icon.png" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="lg:text-base text-xs">
                                    <p className="dark:text-white">Class</p>
                                    <p className="text-[#303972] font-semibold">VII</p>
                                </div>
                            </div>
                            {/* Col 4 */}
                            <div className="dark:text-white text-xs">
                                <p>Views</p>
                                <p>100</p>
                            </div>
                            {/* Col 5 */}
                            <div className="flex lg:gap-x-10 gap-x-5">
                                <button>
                                    <img src="/print.png" alt="img" />
                                </button>
                                <button>
                                    <img src="/Dots.png" alt="img" />
                                </button>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="grid grid-cols-5 place-items-center">
                            {/* Col 1 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="text-[#303972] font-semibold lg:text-base text-xs">Judul Materi</div>
                            </div>
                            {/* Col 2 */}
                            <div className="text-[#303972] font-semibold lg:text-base text-xs">ID 12345678</div>
                            {/* Col 3 */}
                            <div className="flex items-center gap-2">
                                <img src="/icon.png" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="lg:text-base text-xs">
                                    <p className="dark:text-white">Class</p>
                                    <p className="text-[#303972] font-semibold">VII</p>
                                </div>
                            </div>
                            {/* Col 4 */}
                            <div className="dark:text-white text-xs">
                                <p>Views</p>
                                <p>100</p>
                            </div>
                            {/* Col 5 */}
                            <div className="flex lg:gap-x-10 gap-x-5">
                                <button>
                                    <img src="/print.png" alt="img" />
                                </button>
                                <button>
                                    <img src="/Dots.png" alt="img" />
                                </button>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="grid grid-cols-5 place-items-center">
                            {/* Col 1 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="text-[#303972] font-semibold lg:text-base text-xs">Judul Materi</div>
                            </div>
                            {/* Col 2 */}
                            <div className="text-[#303972] font-semibold lg:text-base text-xs">ID 12345678</div>
                            {/* Col 3 */}
                            <div className="flex items-center gap-2">
                                <img src="/icon.png" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="lg:text-base text-xs">
                                    <p className="dark:text-white">Class</p>
                                    <p className="text-[#303972] font-semibold">VII</p>
                                </div>
                            </div>
                            {/* Col 4 */}
                            <div className="dark:text-white text-xs">
                                <p>Views</p>
                                <p>100</p>
                            </div>
                            {/* Col 5 */}
                            <div className="flex lg:gap-x-10 gap-x-5">
                                <button>
                                    <img src="/print.png" alt="img" />
                                </button>
                                <button>
                                    <img src="/Dots.png" alt="img" />
                                </button>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="grid grid-cols-5 place-items-center">
                            {/* Col 1 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="text-[#303972] font-semibold lg:text-base text-xs">Judul Materi</div>
                            </div>
                            {/* Col 2 */}
                            <div className="text-[#303972] font-semibold lg:text-base text-xs">ID 12345678</div>
                            {/* Col 3 */}
                            <div className="flex items-center gap-2">
                                <img src="/icon.png" alt="img" className="lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300" />
                                <div className="lg:text-base text-xs">
                                    <p className="dark:text-white">Class</p>
                                    <p className="text-[#303972] font-semibold">VII</p>
                                </div>
                            </div>
                            {/* Col 4 */}
                            <div className="dark:text-white text-xs">
                                <p>Views</p>
                                <p>100</p>
                            </div>
                            {/* Col 5 */}
                            <div className="flex lg:gap-x-10 gap-x-5">
                                <button>
                                    <img src="/print.png" alt="img" />
                                </button>
                                <button>
                                    <img src="/Dots.png" alt="img" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center lg:text-base text-xs pt-4">
                        <div className="dark:text-white">
                            <p>Showing <span className="font-bold">1-5</span> from 100 data</p>
                        </div>
                        <div>
                            <img src="/Page.png" alt="img" className="lg:w-56 lg:h-18 w-26 h-10" />
                        </div>
                    </div>
                </div>
                {/*  */}
                <h1 className="dark:text-white">Analisis Pengguna</h1>
                <div className="bg-white dark:bg-[#262626] w-full h-auto pb-8 container">

                </div>
            </div>
            <Footer />
        </>
    );
}
