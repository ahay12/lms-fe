export default function Category() {
    return (
        <>
            <div className="container pt-32">
                <div>
                    <h1 className="font-semibold text-5xl">Kategori</h1>
                    <div className="flex justify-between">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat ratione temporibus eaque tempora sed?</p>
                        <button className="w-[120px] h-[63px] bg-[#FCFCFD]/95 hover:scale-110 rounded-md" >
                            View All
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 place-items-center gap-6 pt-10">
                    <div className="w-[480px] h-[314px] bg-white rounded-md shadow-lg shadow-black/30">
                        <div className="flex flex-col justify-center items-center gap-5 my-14">
                            <img src={"/logo-kesehatan.png"} alt="logo" className="w-24 h-24" />
                            <h3 className="text-2xl font-semibold">Kesehatan</h3>
                            <button className="w-32 h-12 bg-gray-200/60 rounded-2xl">Lihat Semua</button>
                        </div>
                    </div>
                    <div className="w-[480px] h-[314px] bg-white rounded-md shadow-lg shadow-black/30">
                        <div className="flex flex-col justify-center items-center gap-5 my-14">
                            <img src={"/logo-teknologi.png"} alt="logo" className="w-24 h-24" />
                            <h3 className="text-2xl font-semibold">Teknologi</h3>
                            <button className="w-32 h-12 bg-gray-200/60 rounded-2xl">Lihat Semua</button>
                        </div>
                    </div>
                    <div className="w-[480px] h-[314px] bg-white rounded-md shadow-lg shadow-black/30">
                        <div className="flex flex-col justify-center items-center gap-5 my-14">
                            <img src={"/logo-buku.png"} alt="logo" className="w-24 h-24" />
                            <h3 className="text-2xl font-semibold">Keterampilan Hidup</h3>
                            <button className="w-32 h-12 bg-gray-200/60 rounded-2xl">Lihat Semua</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
