export default function Hero() {
    return (
        <>
            <div className="w-full h-full pt-24">
                <div className="w-full h-[782px] bg-[url('/hero.png')] object-fill">
                    <div className="flex items-center justify-center h-full">
                        <div className="flex flex-col space-y-5 items-center">
                            <h1 className="text-5xl font-bold text-white">Belajar Menyenangkan</h1>
                            <h1 className="text-5xl font-bold text-white">Untuk Semua Usia!</h1>
                            <p className="py-20 text-white">Our goal is to make online education work for everyone</p>
                            <button className="w-[135px] h-[52px] bg-[#007AFF]/15 text-white font-bold">
                                Join us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
