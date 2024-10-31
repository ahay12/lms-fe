export default function Hero() {
    return (
        <>
            <div className="lg:pt-24 pt-14">
                <div className="w-full lg:h-[782px] h-[640px]">
                    <img className="absolute bg-[url('/hero.png')] bg-cover opacity-80 w-full lg:h-[782px] h-[640px]" />
                    <div className="relative flex items-center justify-center h-full">
                        <div className="flex flex-col space-y-5 items-center">
                            <h1 className="lg:text-5xl text-xl font-bold text-white">Belajar Menyenangkan</h1>
                            <h1 className="lg:text-5xl text-xl font-bold text-white">Untuk Semua Usia!</h1>
                            <p className="lg:text-base text-xs py-20 text-white">Our goal is to make online education work for everyone</p>
                            <button className="w-[135px] h-[52px] bg-[#007AFF]/15 dark:bg-red-600/15 text-white font-bold">
                                Join us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
