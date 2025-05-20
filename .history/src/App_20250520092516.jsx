import { BrowserRouter, Route, Routes } from "react-router-dom"
import Wendell from "./pages/Wendell"
import JoaoVictor from "./pages/JoaoVictor"
import Fabilson from "./pages/Fabilson"
import Igor from "./pages/Igor"
import Will from "./pages/Will"
import SobreMim from "./pages/Ana/pages/SobreMim"
import Curriculo from "./pages/Ana/pages/Curriculo"
import Gabriel from "./pages/Gabriel"
import Theo from "./pages/Theo"
import Lucas from "./pages/Lucas"
import JoaoPaulo from "./pages/JoaoPaulo"
import Renato from "./pages/Renato"
import Giovana from "./pages/Giovana"
import Hideki from "./pages/Hideki"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/wendell" element={<Wendell />} />
          <Route path="/joaovictor" element={<JoaoVictor />} />
          <Route path="/mayara" element={<Mayara />} />
          <Route path="/fabilson" element={<Fabilson />} />
          <Route path="/igor" element={<Igor />} />
          <Route path="/will" element={<Will />} />
          <Route path="/ana/sobremim" element={<Ana />} />
          <Route path="/gabriel" element={<Gabriel />} />
          <Route path="/theo" element={<Theo />} />
          <Route path="/lucas" element={<Lucas />} />
          <Route path="/joaopaulo" element={<JoaoPaulo />} />
          <Route path="/renato" element={<Renato />} />
          <Route path="/giovana" element={<Giovana />} />
          <Route path="/hideki" element={<Hideki />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
