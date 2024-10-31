export default function Footer() {
    return (
        <>
            <div className="flex lg:flex-row flex-col lg:items-center pl-3 justify-center gap-10 bg-white dark:bg-dark dark:text-white w-full lg:h-[300px] h-auto border-t-white pt-4 pb-10 border-t mt-10">
                <div className="lg:w-1/3">
                    <div className="flex flex-col lg:items-center">
                        <img src={"/Logo.png"} alt="" className="w-10 h-10" />
                        <p>email@mail.com</p>
                        <p>+62 0904-2424-4245</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:flex lg:flex-row grid grid-cols-2 lg:justify-end gap-8 lg:space-x-24">
                    <div>
                        <h1 className="font-bold lg:mb-3 mb-1">Beranda</h1>
                        <div className="flex flex-col">
                            <a href="#">Kategori</a>
                            <a href="#">Materi</a>
                            <a href="#">Statistik</a>
                            <a href="#">Profil</a>
                            <a href="#">Forum</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold lg:mb-3 mb-1">Tentang Kami</h1>
                        <div className="flex flex-col">
                            <a href="#">Perusahaan</a>
                            <a href="#">Pencapaian</a>
                            <a href="#">Target Kita</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold mb-3">Profile Sosial</h1>
                        <div className="flex flex-row  gap-5">
                            <a href="#" className="lg:w-14 lg:h-14 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <img src="/icon-fb.png" alt="logo-fb" className="w-8 h-8" />
                            </a>
                            <a href="#" className="lg:w-14 lg:h-14 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <img src="/icon-fb.png" alt="logo-fb" className="w-8 h-8" />
                            </a>
                            <a href="#" className="lg:w-14 lg:h-14 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <img src="/icon-fb.png" alt="logo-fb" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-dark dark:text-white p-10">
                <hr className="w-10/12 mx-auto my-4 h-1" />
                <p className="text-center">© 2024 All rights reserved</p>
            </div>
        </>
    )
};
