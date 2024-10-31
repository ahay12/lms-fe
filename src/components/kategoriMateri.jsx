import { useState } from "react";
import Navbar from "./navbar";
import useDocumentTitle from "../lib/useDocumentTitle";
import Footer from "./footer";

export default function KategoriMateri() {
    const [selectedValue, setSelectedValue] = useState('pemula')
    const [sort, setSort] = useState('tanggal')
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleSelectChange2 = (event) => {
        setSort(event.target.value);
    };
    useDocumentTitle("Kategori Materi")
    return (
        <>
            <Navbar />
            {/* Breadcrumbs start */}
            <div className="pl-20 pt-32 dark:text-white">
                <a href="/">
                    <span>&larr;</span>
                    <span>Kembali</span>
                </a>
            </div>

            {/* Head */}
            <div className="max-w-7xl mx-auto pt-10">
                <h1 className="font-bold text-4xl dark:text-white">Daftar Materi</h1>
            </div>

            {/* Filter */}

            <div className="max-w-7xl mx-auto pt-10">
                <div className="flex gap-x-20">
                    <div className="w-44 h-10">
                        <label className="font-bold block dark:text-white">Pilih Level</label>
                        <select value={selectedValue} onChange={handleSelectChange} name="lavel" id="lavel" className="rounded-sm font-semibold w-full h-full border border-black focus:ring-black focus:border-blue-500">
                            <option value="pemula" className={selectedValue === 'pemula' ? 'bg-gray' : ""}>Pemula</option>
                            <option value="menengah" className={selectedValue === 'menengah' ? 'bg-gray' : ""}>Menengah</option>
                            <option value="lanjutan" className={selectedValue === 'lanjutan' ? 'bg-gray' : ""}>Lanjutan</option>
                        </select>
                    </div>
                    <div className="w-44 h-10">
                        <label className="font-bold block dark:text-white">Sort</label>
                        <select value={sort} onChange={handleSelectChange2} name="sort" id="sort" className="rounded-sm font-semibold w-full h-full border border-black focus:ring-black focus:border-blue-500">
                            <option value="tanggal" className={sort === "tanggal" ? "bg-gray" : ""}>Tanggal</option>
                            <option value="popularitas" className={sort === "popularitas" ? "bg-gray" : ""}>Popularitas</option>
                        </select>
                    </div>
                </div>
                <div className="pt-20 flex flex-col gap-y-10">
                    {/* Materi 1 */}
                    <div className="w-full h-[500px] bg-white dark:bg-black rounded-md">
                        <div className="py-10 pl-6 flex gap-x-10">
                            <img src="/materi-1.png" alt="image" className="w-96" />
                            <img src="/materi-1.png" alt="image" className="w-96" />
                            <img src="/materi-1.png" alt="image" className="w-96" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold pl-6 dark:text-white">Judul Materi</h1>
                            <p className="pl-6 dark:text-white">Deskripsi Materi</p>
                        </div>
                        <button className="ml-6 mt-20 p-3 bg-gray rounded-md">Pelajari Lebih Lanjut</button>
                    </div>
                    {/* Materi 2 */}
                    <div className="w-full h-[500px] bg-white dark:bg-black rounded-md">
                        <div className="py-10 pl-6 flex gap-x-10">
                            <img src="/materi-1.png" alt="image" className="w-96" />
                            <img src="/materi-1.png" alt="image" className="w-96" />
                            <img src="/materi-1.png" alt="image" className="w-96" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold pl-6 dark:text-white">Judul Materi</h1>
                            <p className="pl-6 dark:text-white">Deskripsi Materi</p>
                        </div>
                        <button className="ml-6 mt-20 p-3 bg-gray rounded-md">Pelajari Lebih Lanjut</button>
                    </div>
                    {/* Materi 3 */}
                    <div className="w-full h-[500px] bg-white dark:bg-black rounded-md">
                        <div className="py-10 pl-6 flex gap-x-10">
                            <img src="/materi-1.png" alt="image" className="w-96" />
                            <img src="/materi-1.png" alt="image" className="w-96" />
                            <img src="/materi-1.png" alt="image" className="w-96" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold pl-6 dark:text-white">Judul Materi</h1>
                            <p className="pl-6 dark:text-white">Deskripsi Materi</p>
                        </div>
                        <button className="ml-6 mt-20 p-3 bg-gray rounded-md">Pelajari Lebih Lanjut</button>
                    </div>
                    {/* Materi 4 */}
                    <div className="w-full h-[500px] bg-white dark:bg-black rounded-md">
                        <div className="py-10 pl-6 flex gap-x-10">
                            <img src="/materi-1.png" alt="image" className="w-96" />
                            <img src="/materi-1.png" alt="image" className="w-96" />
                            <img src="/materi-1.png" alt="image" className="w-96" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold pl-6 dark:text-white">Judul Materi</h1>
                            <p className="pl-6 dark:text-white">Deskripsi Materi</p>
                        </div>
                        <button className="ml-6 mt-20 p-3 bg-gray rounded-md">Pelajari Lebih Lanjut</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};
