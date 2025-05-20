import React from "react";
import { FaGithub, FaLinkedin, FaNetworkWired, FaLaptopCode, FaShieldAlt, FaUserTie } from "react-icons/fa";

const CurriculoRenato = () => (
    <section className="max-w-2xl mx-auto my-10 p-8 bg-gray-800 text-white rounded-3xl shadow-2xl transform transition hover:scale-105">
        {/* Nome e Informações */}
        <header className="border-b-2 border-blue-400 pb-6 mb-6 text-center">
            <h1 className="text-4xl font-bold text-blue-300 tracking-wide">Renato Filho</h1>
            <p className="text-lg text-gray-400 mt-2">Analista de Suporte | Especialista em Redes de Computadores</p>
            <p className="text-sm text-gray-500 mt-1">33 anos | Fortaleza, CE | renato.silva@email.com | (85) 99999-9999</p>
        </header>

        {/* Resumo Profissional */}
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-300">🚀 Resumo Profissional</h2>
            <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Profissional graduado em Redes de Computadores pela FATENE, com mais de 5 anos de experiência em suporte técnico e infraestrutura de TI.
                Reconhecido pela resolução ágil de problemas, liderança proativa e foco em resultados. Entusiasta de tecnologia, apaixonado por desafios e inovação. 💡
            </p>
        </div>

        {/* Experiência Profissional */}
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-300">💼 Experiência Profissional</h2>
            <div className="mt-3">
                <p className="font-bold text-lg text-blue-400">M. Dias Branco – Analista de Suporte I</p>
                <span className="text-gray-500">2021 - Atual</span>
                <ul className="text-gray-300 text-sm mt-2 space-y-2">
                    <li>🚀 Redução de 30% no tempo de resposta a incidentes técnicos.</li>
                    <li>🔎 Implementação de políticas de segurança e monitoramento de infraestrutura.</li>
                    <li>📈 Treinamento de usuários para eficiência operacional.</li>
                </ul>
            </div>
            <div className="mt-4">
                <p className="font-bold text-lg text-blue-400">Eunerd – Técnico de Suporte</p>
                <span className="text-gray-500">2018 - 2021</span>
                <ul className="text-gray-300 text-sm mt-2 space-y-2">
                    <li>⚡ Suporte remoto e presencial para mais de 200 usuários.</li>
                    <li>💻 Manutenção de redes LAN/WAN com segurança avançada.</li>
                    <li>📊 Projetos de atualização e modernização de infraestrutura.</li>
                </ul>
            </div>
        </div>

        {/* Habilidades Técnicas */}
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-300">🔧 Habilidades Técnicas</h2>
            <div className="grid grid-cols-3 gap-6 mt-4 text-center">
                <div className="flex flex-col items-center">
                    <FaNetworkWired className="text-blue-400 text-3xl" />
                    <span>Redes</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaLaptopCode className="text-green-400 text-3xl" />
                    <span>Infraestrutura</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaShieldAlt className="text-yellow-400 text-3xl" />
                    <span>Segurança TI</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaUserTie className="text-gray-400 text-3xl" />
                    <span>Gestão de Suporte</span>
                </div>
            </div>
        </div>

        {/* Certificações */}
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-300">📜 Certificações</h2>
            <ul className="text-gray-300 text-sm mt-3 space-y-2">
                <li>✅ ITIL Foundation (em andamento)</li>
                <li>✅ Curso de Redes Cisco CCNA (básico)</li>
            </ul>
        </div>

        {/* Redes Sociais */}
        <div className="flex gap-6 justify-center mt-6">
            <a 
                href="https://github.com/RenatofilhoDevandtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 text-lg font-semibold hover:text-blue-500 transition duration-200"
            >
                <FaGithub className="text-3xl" /> GitHub
            </a>
            <a 
                href="https://www.linkedin.com/in/renato-filho-devandtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 text-lg font-semibold hover:text-blue-500 transition duration-200"
            >
                <FaLinkedin className="text-3xl" /> LinkedIn
            </a>
        </div>
    </section>
);

export default CurriculoRenato;
