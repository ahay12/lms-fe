import Footer from "./footer";
import Navbar from "./navbar";

export default function Forum() {
    return (
        <>
            <Navbar />
            <div className="container pt-32 max-w-7xl mx-auto">
                <h1 className="uppercase text-4xl font-semibold dark:text-white">Forum Diskusi</h1>
                <p className="dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id omnis temporibus cupiditate laboriosam ad in consectetur ut sunt! Deleniti?</p>
                {/* Comments */}
                <div className="flex flex-col gap-10 mt-20">
                    <div className="w-full rounded-md bg-white dark:text-white dark:bg-[#262626] border dark:border-gray-100">
                        <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis rem quae obcaecati? Voluptates dignissimos laudantium provident eum, sapiente qui sed laboriosam iste id unde?</p>
                        <div className="flex justify-between bg-gray-100 dark:bg-[#262626] p-3 border-t border-gray-100 rounded-md">
                            <div className="flex gap-3 items-center">
                                <img src={"/avatar.jpg"} alt="img" className="w-8 h-8 rounded-md" />
                                <h3 className="font-semibold">Nama Pengguna</h3>
                            </div>
                            <button className="w-20 h-12 rounded-md bg-white dark:text-dark">Jawab</button>
                        </div>
                    </div>
                    <div className="w-full rounded-md bg-white dark:text-white dark:bg-[#262626] border dark:border-gray-100">
                        <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis rem quae obcaecati? Voluptates dignissimos laudantium provident eum, sapiente qui sed laboriosam iste id unde?</p>
                        <div className="flex justify-between bg-gray-100 dark:bg-[#262626] p-3 border-t border-gray-100 rounded-md">
                            <div className="flex gap-3 items-center">
                                <img src={"/avatar.jpg"} alt="img" className="w-8 h-8 rounded-md" />
                                <h3 className="font-semibold">Nama Pengguna</h3>
                            </div>
                            <button className="w-20 h-12 rounded-md bg-white dark:text-dark">Jawab</button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 items-end justify-end pt-5">
                    <button className="w-20 h-12 rounded-md bg-white">Back</button>
                    <button className="w-20 h-12 rounded-md bg-white">Next</button>
                </div>
                <div>
                    <form className="mt-10">
                        <label htmlFor="question" className="dark:text-white">Tulis pertanyaanmu</label>
                        <textarea
                            name="question"
                            id="question"
                            className="w-full h-32 pl-2 rounded-md dark:text-white dark:bg-[#262626] border dark:border-gray-100"
                        ></textarea>
                        <button className="w-20 h-12 mt-3 rounded-md bg-white dark:text-dark">Kirim</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
};
