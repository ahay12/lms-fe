import Footer from "./footer";
import Navbar from "./navbar";
import { useState } from "react";

export default function Profil() {
    const [isImageError, setIsImageError] = useState(false);

    const handleImageError = () => {
        setIsImageError(true); // Set the state to hide or replace the image when an error occurs
    };

    return (
        <>
            <Navbar name="Profil Pengguna" />

            <div className="grid lg:grid-cols-2 pt-32 gap-8 max-w-7xl mx-auto">
                <div className="w-full h-96 bg-white rounded-md">
                    <div className="w-full h-24 bg-[#4D44B5] relative rounded-md">
                        <img src="/bg-profil.png" alt="img" className="w-full h-full" />
                        <div className="absolute left-5 top-7 w-28 h-28 bg-white rounded-full">
                            {!isImageError ? (
                                <img
                                    src="/path-to-user-image.jpg" // replace with the actual user image path or leave empty if dynamic
                                    alt="User"
                                    onError={handleImageError}
                                    className="w-24 h-24 rounded-full bg-gray-400 mx-auto my-2"
                                />
                            ) : (
                                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto my-2 flex items-center justify-center">
                                    <span className="text-gray-500">No Image</span> {/* Placeholder text */}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="px-4 pt-12">
                        <h1 className="font-bold py-3">Nama Pengguna</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia sequi quaerat libero at expedita repellendus aperiam voluptates eos nostrum!</p>
                    </div>
                    <div className="pl-5 pt-10 grid grid-cols-3">
                        <div>
                            <h5 className="text-[#a0a0a0]">Lokasi</h5>
                            <p className="lg:text-base text-xs">Jakarta, Indonesia</p>
                        </div>
                        <div>
                            <h5 className="text-[#a0a0a0]">No Telp</h5>
                            <p className="font-bold lg:text-base text-xs">+62 0982-8298-8712</p>
                        </div>
                        <div>
                            <h5 className="text-[#a0a0a0]">Email</h5>
                            <p className="font-bold lg:text-base text-xs">user@mail.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-10/12 h-[700px] bg-white mx-auto rounded-md">
                    <h1 className="w-3/4 mx-auto pt-10 text-xl font-bold">Riwayat Pembelajaran</h1>


                </div>
            </div>
            <Footer />
        </>
    );
}
