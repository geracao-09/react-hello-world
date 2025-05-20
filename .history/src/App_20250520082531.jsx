import { BrowserRouter, Router } from "react-router-dom"
import Header from "./components/Header"
import links from "/src/data/header.json"
import socialLinks from "/src/data/social-media.json"

function App() {

  return (
    <>
      <Header lista={links} socialLinks={socialLinks}/>

      <BrowserRouter>
        <Router>
          
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
