import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa"; // Ícones modernos

const Navbar = () => {
    return (
        <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-4 shadow-lg border-b border-gray-800">
            <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-green-400 tracking-wide text-center md:text-left">
                    🔗 Explore Meu Portfólio
                </h2>
                <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-md md:text-lg mt-4 md:mt-0">
                    <li>
                        <Link to="/" className="flex items-center gap-2 hover:text-green-400 transition">
                            <FaHome /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/renato/curriculo" className="flex items-center gap-2 hover:text-green-400 transition">
                            <FaBriefcase /> Currículo
                        </Link>
                    </li>
                    <li>
                        <Link to="/renato/sobremim" className="flex items-center gap-2 hover:text-green-400 transition">
                            <FaUser /> Sobre Mim
                        </Link>
                    </li>
                    <li>
                        <Link to="/renato/projetos" className="flex items-center gap-2 hover:text-green-400 transition">
                            <FaCode /> Projetos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
