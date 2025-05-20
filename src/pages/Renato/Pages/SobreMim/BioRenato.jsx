import React from "react";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";

const Renato = () => {
    return (
        <section className="max-w-lg mx-auto my-10 p-8 bg-gray-800 text-white rounded-3xl shadow-xl transform transition hover:scale-105">
            {/* Avatar e Nome */}
            <div className="flex flex-col items-center text-center">
                <img
                    src="https://private-user-images.githubusercontent.com/59034938/405424353-0f1b1533-74a6-48e5-9966-0f540d1b1445.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc3NTIwMTQsIm5iZiI6MTc0Nzc1MTcxNCwicGF0aCI6Ii81OTAzNDkzOC80MDU0MjQzNTMtMGYxYjE1MzMtNzRhNi00OGU1LTk5NjYtMGY1NDBkMWIxNDQ1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTIwVDE0MzUxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkZTFmNzliZjM1ZGFmNDQ5ZGFiMDg1OGM4Nzg3ZjIxZmI2ODA1N2NhNjE2MDYyN2E3ZjNhNDU1ZDQwMWVmODMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hfFdoV-MQ19Te0NOtase3S7qvxnuN6mmpRFRsCK-5mA"
                    alt="Renato Avatar"
                    className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
                />
                <h1 className="text-4xl font-bold text-blue-400 mt-4">Renato Filho </h1>
                <p className="text-lg text-gray-300 font-medium">Desenvolvedor Front-end | Analista de Suporte</p>
            </div>

            {/* Seção Sobre Mim */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-blue-300">Sobre Mim</h2>
                <p className="text-lg text-gray-300 leading-relaxed mt-2">
                    🔥 Apaixonado por desenvolvimento web, minha missão é criar <strong>experiências digitais impecáveis</strong>.  
                    Tenho habilidades sólidas em <span className="font-bold text-blue-400">React</span> e <span className="font-bold text-green-400">Node.js</span>,  
                    sempre buscando entregar <strong>soluções rápidas e eficientes</strong>.
                </p>
            </div>

            {/* Habilidades com Ícones */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-blue-300">Habilidades Técnicas</h2>
                <div className="grid grid-cols-3 gap-6 text-lg text-gray-300 mt-3">
                    <div className="flex flex-col items-center">
                        <FaReact className="text-blue-400 text-3xl" />
                        <span>React</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaNodeJs className="text-green-400 text-3xl" />
                        <span>Node.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaJs className="text-yellow-400 text-3xl" />
                        <span>JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaHtml5 className="text-orange-400 text-3xl" />
                        <span>HTML</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCss3Alt className="text-blue-400 text-3xl" />
                        <span>CSS</span>
                    </div>
                </div>
            </div>

            {/* Chamada para ação */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-blue-300">Meu Objetivo</h2>
                <p className="text-lg text-gray-300 leading-relaxed mt-2">
                    🚀 Busco uma oportunidade para trabalhar em <strong>projetos de alto impacto</strong>,  
                    transformando ideias em <strong>aplicações inovadoras</strong>.  
                    💡 Se você busca um <strong>desenvolvedor comprometido</strong>, vamos conversar!
                </p>
            </div>

            {/* Links com Ícones */}
            <div className="flex gap-6 justify-center mt-6">
                <a 
                    href="https://github.com/seuusuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 text-lg font-semibold hover:text-blue-500 transition duration-200"
                >
                    <FaGithub className="text-3xl" /> GitHub
                </a>
                <a 
                    href="https://linkedin.com/in/seuusuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 text-lg font-semibold hover:text-blue-500 transition duration-200"
                >
                    <FaLinkedin className="text-3xl" /> LinkedIn
                </a>
            </div>

            {/* Botão de Contato */}
            <div className="mt-8 text-center">
                <a 
                    href="mailto:renatoservicesti@gmail.com"
                    className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-md"
                >
                    ✉️ Entre em Contato
                </a>
            </div>
        </section>
    );
};

export default Renato;
