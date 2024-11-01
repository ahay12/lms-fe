import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import Navbar from "./navbar";
import Footer from "./footer";

Chart.register(...registerables);

export default function Statistik() {
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
                            label: "Minggu ini",
                            data: [242, 546, 464, 323, 234, 234, 535],
                            backgroundColor: "rgba(252, 196, 62, 1)",
                            borderColor: "rgba(252, 196, 62, 1)",
                            borderWidth: 1
                        },
                        {
                            label: "Minggu lalu",
                            data: [300, 400, 300, 500, 250, 350, 450],
                            backgroundColor: "rgba(251, 125, 91, 1)",
                            borderColor: "rgba(251, 125, 91, 1)",
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
                    <h1 className="uppercase text-3xl font-bold">statistik pengguna</h1>
                </div>
                {/*  */}
                <div className="bg-white w-full h-auto p-5 rounded-b-md">
                    <h2 className="p-5">Grafik Kunjungan</h2>
                    <canvas id="chartBar"></canvas>
                </div>
                {/*  */}
                <div className="bg-white w-full h-auto pb-8 container">
                    <h3 className="p-5">Materi Populer</h3>
                    <div className="grid grid-rows-5 gap-y-5">
                        {/* 1 */}
                        <div className="grid grid-cols-5 place-items-center">
                            {/* Col 1 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="w-10 h-10 rounded-full bg-gray-300" />
                                <div>Judul Materi</div>
                            </div>
                            {/* Col 2 */}
                            <div>ID 12345678</div>
                            {/* Col 3 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="w-10 h-10 rounded-full bg-gray-300" />
                                <div>
                                    <p>Class</p>
                                    <p>VII</p>
                                </div>
                            </div>
                            {/* Col 4 */}
                            <div>
                                <p>Views</p>
                                <p>100</p>
                            </div>
                            {/* Col 5 */}
                            <div className="flex gap-x-10">
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
                                <img src="" alt="img" className="w-10 h-10 rounded-full bg-gray-300" />
                                <div>Judul Materi</div>
                            </div>
                            {/* Col 2 */}
                            <div>ID 12345678</div>
                            {/* Col 3 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="w-10 h-10 rounded-full bg-gray-300" />
                                <div>
                                    <p>Class</p>
                                    <p>VII</p>
                                </div>
                            </div>
                            {/* Col 4 */}
                            <div>
                                <p>Views</p>
                                <p>100</p>
                            </div>
                            {/* Col 5 */}
                            <div className="flex gap-x-10">
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
                                <img src="" alt="img" className="w-10 h-10 rounded-full bg-gray-300" />
                                <div>Judul Materi</div>
                            </div>
                            {/* Col 2 */}
                            <div>ID 12345678</div>
                            {/* Col 3 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="w-10 h-10 rounded-full bg-gray-300" />
                                <div>
                                    <p>Class</p>
                                    <p>VII</p>
                                </div>
                            </div>
                            {/* Col 4 */}
                            <div>
                                <p>Views</p>
                                <p>100</p>
                            </div>
                            {/* Col 5 */}
                            <div className="flex gap-x-10">
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
                                <img src="" alt="img" className="w-10 h-10 rounded-full bg-gray-300" />
                                <div>Judul Materi</div>
                            </div>
                            {/* Col 2 */}
                            <div>ID 12345678</div>
                            {/* Col 3 */}
                            <div className="flex items-center gap-2">
                                <img src="" alt="img" className="w-10 h-10 rounded-full bg-gray-300" />
                                <div>
                                    <p>Class</p>
                                    <p>VII</p>
                                </div>
                            </div>
                            {/* Col 4 */}
                            <div>
                                <p>Views</p>
                                <p>100</p>
                            </div>
                            {/* Col 5 */}
                            <div className="flex gap-x-10">
                                <button>
                                    <img src="/print.png" alt="img" />
                                </button>
                                <button>
                                    <img src="/Dots.png" alt="img" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p>Showing 1-5 from 100 data</p>
                        </div>
                        <div>
                            <img src="/Page.png" alt="img" className="w-56 h-18" />
                        </div>
                    </div>
                </div>
                {/*  */}
                <h1>Analisis Pengguna</h1>
                <div className="bg-white w-full h-auto pb-8 container">

                </div>
            </div>
            <Footer />
        </>
    );
}