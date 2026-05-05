import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import {
    Problem,
    Paradigm,
    Process,
    Performance,
    CategoryLine,
    Market,
} from "./components/Sections";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const Landing = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        document
            .querySelectorAll(".reveal")
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-lavender min-h-screen">
            <Nav />
            <main>
                <Hero />
                <Problem />
                <Paradigm />
                <Process />
                <Performance />
                <CategoryLine />
                <Market />
                <Team />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
