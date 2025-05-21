import Navbar from "../components/Navbar"; // Importando o Navbar
import Footer from "../components/Footer"; // Importando o Footer
import { Outlet } from "react-router-dom"; // Outlet renderiza as páginas dentro do Layout

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar /> {/* Navbar sempre visível no topo */}
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
        <Outlet /> {/* Aqui entram as páginas (Currículo, Sobre, Projetos) */}
      </main>
      <Footer /> {/* Rodapé sempre visível no final */}
    </div>
  );
};

export default Layout;
