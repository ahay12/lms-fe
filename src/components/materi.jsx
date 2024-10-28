export default function Materi() {
    return (
        <>
            <div className="container pt-32">
                <div>
                    <h1 className="font-semibold text-5xl">Materi</h1>
                    <div className="flex justify-between">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat ratione temporibus eaque tempora sed?</p>
                        <button className="w-[120px] h-[63px] bg-[#FCFCFD]/95 hover:scale-110 rounded-md" >
                            View All
                        </button>
                    </div>
                </div>
                {/*  */}
                <div className="grid grid-cols-2 place-items-center gap-y-10 pt-10">
                    <div className="w-[650px] h-[600px] bg-white rounded-lg">
                        <img src={"/materi-1.png"} alt="gambar" className="w-[80%] mx-auto mt-10" />
                        <div className="flex flex-col pt-20 ml-10 pb-10">
                            <h3 className="text-xl font-semibold">Olahraga Aman Untuk Lansia</h3>
                            <p>Temukan panduan olahraga ringan yang aman dan efektif untuk menjaga kebugaran fisik</p>
                        </div>
                        <button className="w-[90%] h-12 rounded-md bg-gray-200 mx-8">Mulai Belajar</button>
                    </div>
                    <div className="w-[650px] h-[600px] bg-white rounded-lg">
                        <img src={"/materi-1.png"} alt="gambar" className="w-[80%] mx-auto mt-10" />
                        <div className="flex flex-col pt-20 ml-10 pb-10">
                            <h3 className="text-xl font-semibold">Olahraga Aman Untuk Lansia</h3>
                            <p>Temukan panduan olahraga ringan yang aman dan efektif untuk menjaga kebugaran fisik</p>
                        </div>
                        <button className="w-[90%] h-12 rounded-md bg-gray-200 mx-8">Mulai Belajar</button>
                    </div>
                    <div className="w-[650px] h-[600px] bg-white rounded-lg">
                        <img src={"/materi-1.png"} alt="gambar" className="w-[80%] mx-auto mt-10" />
                        <div className="flex flex-col pt-20 ml-10 pb-10">
                            <h3 className="text-xl font-semibold">Olahraga Aman Untuk Lansia</h3>
                            <p>Temukan panduan olahraga ringan yang aman dan efektif untuk menjaga kebugaran fisik</p>
                        </div>
                        <button className="w-[90%] h-12 rounded-md bg-gray-200 mx-8">Mulai Belajar</button>
                    </div>
                    <div className="w-[650px] h-[600px] bg-white rounded-lg">
                        <img src={"/materi-1.png"} alt="gambar" className="w-[80%] mx-auto mt-10" />
                        <div className="flex flex-col pt-20 ml-10 pb-10">
                            <h3 className="text-xl font-semibold">Olahraga Aman Untuk Lansia</h3>
                            <p>Temukan panduan olahraga ringan yang aman dan efektif untuk menjaga kebugaran fisik</p>
                        </div>
                        <button className="w-[90%] h-12 rounded-md bg-gray-200 mx-8">Mulai Belajar</button>
                    </div>
                </div>
            </div>
        </>
    )
};
