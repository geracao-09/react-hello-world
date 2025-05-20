import { BrowserRouter, Route, Routes } from "react-router-dom"
import Wendell from "./pages/Wendell"
import Curriculo from "./pages/Wendell/pages/Curriculo"
import SobreMim from "./pages/Wendell/pages/SobreMim"
import JoaoVictor from "./pages/JoaoVictor"
import Fabilson from "./pages/Fabilson"
import Igor from "./pages/Igor"
import Will from "./pages/Will"
import Ana from "./pages/Ana"
import Gabriel from "./pages/Gabriel"
import Theo from "./pages/Theo"
import Lucas from "./pages/Lucas"
import JoaoPaulo from "./pages/JoaoPaulo"
import Renato from "./pages/Renato"
import Giovana from "./pages/Giovana"
import Hideki from "./pages/Hideki"
import Mayara from "./pages/Mayara"
import Index from "./pages/Index"
import SobreMimHideki from "./pages/Hideki/pages/SobreMimHideki"
import CurriculoHideki from "./pages/Hideki/pages/CurriculoHideki"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wendell" element={<Wendell />} />
          <Route path="/wendell/curriculo" element={<Curriculo />} />
          <Route path="/wendell/sobremim" element={<SobreMim />} />
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
          <Route path="/renato" element={<Renato />} />
          <Route path="/giovana" element={<Giovana />} />
          <Route path="/hideki" element={<Hideki />} />
          <Route path="/hideki/sobremim" element={<SobreMimHideki />} />
          <Route path="/hideki/curriculo" element={<Curriculo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
