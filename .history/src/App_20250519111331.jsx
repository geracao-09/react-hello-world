import Header from "./components/Header"
import links from "/src/data/header.json"

function App() {

  return (
    <>
      <Header lista={links} socialLinks={}/>
    </>
  )
}

export default App
