import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Ícones sociais

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-4 sm:py-6 text-center border-t border-gray-700 shadow-inner">
            <p className="text-sm sm:text-lg font-semibold tracking-wide text-green-300">
                © 2025 Renato Filho - Todos os direitos reservados
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
                Criado com paixão por tecnologia 🚀
            </p>
            
            {/* Ícones sociais */}
            <div className="flex flex-wrap justify-center mt-3 sm:mt-4 gap-4 sm:gap-6">
                <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-green-400 text-xl sm:text-2xl hover:text-green-500 transition" />
                </a>
                <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-green-400 text-xl sm:text-2xl hover:text-green-500 transition" />
                </a>
                <a href="mailto:seuemail@example.com">
                    <FaEnvelope className="text-green-400 text-xl sm:text-2xl hover:text-green-500 transition" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
