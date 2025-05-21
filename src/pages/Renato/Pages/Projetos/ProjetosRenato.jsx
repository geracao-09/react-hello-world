import React from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa"; 

const projetos = [
    {
        titulo: "Portfólio Pessoal",
        descricao: "Site pessoal desenvolvido em React para apresentar meus projetos, habilidades e experiências profissionais.",
        tecnologias: ["React", "CSS", "JavaScript"],
        link: "https://seuportfolio.com"
    },
    {
        titulo: "Sistema de Controle de Tarefas",
        descricao: "Aplicação web para gerenciamento de tarefas, com autenticação de usuários e integração com banco de dados.",
        tecnologias: ["Node.js", "Express", "MongoDB", "React"],
        link: "https://github.com/seuusuario/tarefas"
    },
    {
        titulo: "E-commerce Simples",
        descricao: "Loja virtual fictícia com carrinho de compras, filtros e integração com API de pagamentos.",
        tecnologias: ["React", "Redux", "Stripe API"],
        link: "https://github.com/seuusuario/ecommerce"
    }
];

const sobreMim = `
🚀 Sou Renato, desenvolvedor web apaixonado por tecnologia e inovação. 
Tenho experiência em front-end e back-end, criando soluções eficientes e intuitivas.
Busco sempre aprender novas ferramentas e contribuir em projetos desafiadores.
`;

export default function ProjetosRenato() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white px-10 py-16 shadow-xl border border-gray-800">
            
            {/* Seção Sobre Mim */}
            <div className="max-w-3xl text-center mb-10">
                <h1 className="text-5xl font-extrabold text-green-300 tracking-wide">👤 Sobre Mim</h1>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                    {sobreMim}
                </p>
                <div className="w-32 h-1 mt-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Seção Projetos */}
            <div className="max-w-5xl">
                <h2 className="text-4xl font-extrabold text-green-300 mb-8 text-center">💻 Meus Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projetos.map((projeto, idx) => (
                        <div key={idx} className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg transform transition hover:scale-105">
                            <h3 className="text-2xl font-semibold text-green-400">{projeto.titulo}</h3>
                            <p className="text-gray-300 mt-2">{projeto.descricao}</p>
                            <p className="text-sm text-gray-500 mt-2"><strong>Tecnologias:</strong> {projeto.tecnologias.join(", ")}</p>
                            <a 
                                href={projeto.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 mt-4 text-green-400 text-lg font-semibold hover:text-green-500 transition duration-200"
                            >
                                <FaExternalLinkAlt className="text-lg" /> Ver Projeto
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
