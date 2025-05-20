import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import links from "/src/data/header.json"
import socialLinks from "/src/data/social-media.json"
import Wendell from "./pages/Wendell"
import JoaoVictor from "./pages/JoaoVictor"
import Fabilson from "./pages/Fabilson"
import Igor from "./pages/Igor"
import Will from "./pages/Will"
import Ana from "./pages/Ana"

function App() {

  return (
    <>
      <Header lista={links} socialLinks={socialLinks}/>

      <BrowserRouter>
        <Routes>
          <Route path="/wendell" element={<Wendell />} />
          <Route path="/joaovictor" element={<JoaoVictor />} />
          <Route path="/mayara" element={<Mayara />} />
          <Route path="/fabilson" element={<Fabilson />} />
          <Route path="/igor" element={<Igor />} />
          <Route path="/will" element={<Will />} />
          <Route path="/ana" element={<Ana />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
