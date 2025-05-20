import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MinhasPaginas from "./components/MinhasPaginas";
import SobreMim from "./pages/SobreMim";
import Curriculo from "./pages/Curriculo";

const Hideki = () => {
    return (
        <section className="px-12 py-24">
            <Header />
            <MinhasPaginas />
            <BrowserRouter>
                <Routes>
                    <Route path="/hideki/sobremim" element={<SobreMim />} />
                    <Route path="/hideki/curriculo" element{<Curriculo />}
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default Hideki;