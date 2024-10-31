import Category from "./category";
import Footer from "./footer";
import Hero from "./hero";
import Materi from "./materi";
import Navbar from "./navbar";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Category />
            <Materi />
            <Footer />
        </>
    )
};
