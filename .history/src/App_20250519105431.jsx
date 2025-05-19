import Header from "./components/Header"
import links from "/src/header.json"

function App() {

  return (
    <>
      <Header lista={links}/>
    </>
  )
}

export default App
