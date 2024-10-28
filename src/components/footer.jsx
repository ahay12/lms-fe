export default function Footer() {
    return (
        <>
            <div className="flex items-center bg-white w-full h-[300px] mt-10">
                <div className="w-1/3">
                    <div className="flex flex-col items-center">
                        <img src={"/Logo.png"} alt="" className="w-10 h-10" />
                        <p>email@mail.com</p>
                        <p>+62 0904-2424-4245</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end space-x-24">
                    <div>
                        <h1 className="font-bold mb-3">Beranda</h1>
                        <div className="flex flex-col">
                            <a href="#">Kategori</a>
                            <a href="#">Materi</a>
                            <a href="#">Statistik</a>
                            <a href="#">Profil</a>
                            <a href="#">Forum</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold mb-3">Tentang Kami</h1>
                        <div className="flex flex-col">
                            <a href="#">Perusahaan</a>
                            <a href="#">Pencapaian</a>
                            <a href="#">Target Kita</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold mb-3">Profile Sosial</h1>
                        <div className="flex flex-row gap-5">
                            <a href="#" className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                                <img src="/icon-fb.png" alt="logo-fb" className="w-8 h-8" />
                            </a>
                            <a href="#" className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                                <img src="/icon-fb.png" alt="logo-fb" className="w-8 h-8" />
                            </a>
                            <a href="#" className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                                <img src="/icon-fb.png" alt="logo-fb" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-100 bg-white p-10 flex justify-center">
                <p>© 2024 All rights reserved</p>
            </div>
        </>
    )
};
