export default function Category() {
    return (
        <>
            <div className="container lg:pt-32 pt-14">
                <div>
                    <h1 className="font-semibold lg:text-5xl dark:text-white">Kategori</h1>
                    <div className="flex justify-between">
                        <p className="lg:text-base text-xs dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat ratione temporibus eaque tempora sed?</p>
                        <button className="lg:text-base text-xs lg:w-[120px] lg:h-[63px] w-20 h-11 bg-[#FCFCFD]/95 hover:scale-110 rounded-md" >
                            View All
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 max-lg:grid-rows-3 lg:place-items-center gap-6 pt-10">
                    <div className="lg:w-[480px] lg:h-[314px] w-full h-72 bg-white rounded-md shadow-lg shadow-black/30">
                        <div className="flex flex-col justify-center items-center gap-5 my-14">
                            <img src={"/logo-kesehatan.png"} alt="logo" className="w-24 h-24" />
                            <h3 className="text-2xl font-semibold">Kesehatan</h3>
                            <button className="w-32 h-12 bg-gray-200 rounded-2xl">Lihat Semua</button>
                        </div>
                    </div>
                    <div className="lg:w-[480px] lg:h-[314px] w-full h-72 bg-white rounded-md shadow-lg shadow-black/30">
                        <div className="flex flex-col justify-center items-center gap-5 my-14">
                            <img src={"/logo-teknologi.png"} alt="logo" className="w-24 h-24" />
                            <h3 className="text-2xl font-semibold">Teknologi</h3>
                            <button className="w-32 h-12 bg-gray-200 rounded-2xl">Lihat Semua</button>
                        </div>
                    </div>
                    <div className="lg:w-[480px] lg:h-[314px] w-full h-72 bg-white rounded-md shadow-lg shadow-black/30">
                        <div className="flex flex-col justify-center items-center gap-5 my-14">
                            <img src={"/logo-buku.png"} alt="logo" className="w-24 h-24" />
                            <h3 className="text-2xl font-semibold">Keterampilan Hidup</h3>
                            <button className="w-32 h-12 bg-gray-200 rounded-2xl">Lihat Semua</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
