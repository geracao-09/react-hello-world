import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Header from "./components/Header"
import links from "/src/data/header.json"
import socialLinks from "/src/data/social-media.json"
import Wendell from "./pages/Wendell"

function App() {

  return (
    <>
      <Header lista={links} socialLinks={socialLinks}/>

      <BrowserRouter>
        <Routes>
          <Route path="/wendell" element={<Wendell />} />
          <Route path=
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
