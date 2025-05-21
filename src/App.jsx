import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Renato/components/Layout"; 
import Renato from "./pages/Renato/Renato";
import BioRenato from "./pages/Renato/Pages/SobreMim/BioRenato";
import CurriculoRenato from "./pages/Renato/Pages/Curriculo/CurriculoRenato";
import ProjetosRenato from "./pages/Renato/Pages/Projetos/ProjetosRenato";
import Wendell from "./pages/Wendell";
import JoaoVictor from "./pages/JoaoVictor";
import Fabilson from "./pages/Fabilson";
import Igor from "./pages/Igor";
import Will from "./pages/Will";
import Ana from "./pages/Ana";
import Gabriel from "./pages/Gabriel";
import Theo from "./pages/Theo";
import Lucas from "./pages/Lucas";
import JoaoPaulo from "./pages/JoaoPaulo";
import Giovana from "./pages/Giovana";
import Hideki from "./pages/Hideki";
import Mayara from "./pages/Mayara"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define o Layout como estrutura base */}
        <Route path="/" element={<Layout />}>
          {/* Página principal */}
          <Route index element={<Renato />} />
          
          {/* Subpáginas de Renato dentro do Layout */}
          <Route path="renato/curriculo" element={<CurriculoRenato />} />
          <Route path="renato/sobremim" element={<BioRenato />} />
          <Route path="renato/projetos" element={<ProjetosRenato />} />
        </Route>

        {/* Outras páginas sem Layout */}
        <Route path="/wendell" element={<Wendell />} />
        <Route path="/joaovictor" element={<JoaoVictor />} />
        <Route path="/mayara" element={<Mayara />} /> 
        <Route path="/fabilson" element={<Fabilson />} />
        <Route path="/igor" element={<Igor />} />
        <Route path="/will" element={<Will />} />
        <Route path="/ana" element={<Ana />} />
        <Route path="/gabriel" element={<Gabriel />} />
        <Route path="/theo" element={<Theo />} />
        <Route path="/lucas" element={<Lucas />} />
        <Route path="/joaopaulo" element={<JoaoPaulo />} />
        <Route path="/giovana" element={<Giovana />} />
        <Route path="/hideki" element={<Hideki />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
