import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MinhasPaginas from "./components/MinhasPaginas";

const Hideki = () => {
    return (
        <section className="px-12 py-24">
            <Header />
            <MinhasPaginas />
            <BrowserRouter>
                <Routes>
                    <Route path="/hideki/sobremim" element={<so}
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default Hideki;