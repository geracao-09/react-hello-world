import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaNetworkWired, FaLaptopCode, FaShieldAlt, FaUserTie } from "react-icons/fa";

const shineEffect = {
    initial: { opacity: 0, x: "-150%" },
    hover: { opacity: 1, x: "150%", transition: { duration: 0.6, ease: "linear" } },
};

const CurriculoRenato = () => (
    <motion.section 
        className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-10 py-16 shadow-xl border border-gray-800 rounded-lg backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {/* Nome e Informações */}
        <header className="border-b-2 border-green-400 pb-6 mb-8 text-center max-w-3xl">
            <h1 className="text-6xl font-extrabold text-green-300 tracking-wide animate-pulse">🚀 Renato Filho</h1>
            <p className="text-2xl text-gray-400 mt-3">Analista de Suporte | Especialista em Redes de Computadores</p>
            <p className="text-lg text-gray-500 mt-2">📍 Maracanaú, CE | ✉️ renatoservicesti@email.com | 📞 (85) 98525-2317</p>
        </header>

        {/* Resumo Profissional */}
        <div className="max-w-3xl text-center mb-8">
            <h2 className="text-4xl font-semibold text-green-300">💡 Resumo Profissional</h2>
            <p className="text-lg text-gray-300 mt-3 leading-relaxed">
                Profissional graduado em Redes de Computadores pela FATENE, com mais de 5 anos de experiência em suporte técnico e infraestrutura de TI.
                Reconhecido pela resolução ágil de problemas, liderança proativa e foco em resultados. 💡
            </p>
            <div className="w-32 h-1 mt-6 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        {/* Experiência Profissional */}
        <div className="max-w-3xl mb-8">
            <h2 className="text-4xl font-semibold text-green-300">💼 Experiência Profissional</h2>
            <div className="mt-6">
                <p className="font-bold text-2xl text-green-400">M. Dias Branco – Analista de Suporte I</p>
                <span className="text-gray-500">2024 - Atual</span>
                <ul className="text-gray-300 text-lg mt-4 space-y-2 pl-5 list-disc">
                    <li>🚀 Redução de 30% no tempo de resposta a incidentes técnicos.</li>
                    <li>🔎 Implementação de políticas de segurança e monitoramento de infraestrutura.</li>
                    <li>📈 Treinamento de usuários para eficiência operacional.</li>
                </ul>
            </div>
            <div className="mt-6">
                <p className="font-bold text-2xl text-green-400">Eunerd – Técnico de Suporte</p>
                <span className="text-gray-500">2022 - 2024</span>
                <ul className="text-gray-300 text-lg mt-4 space-y-2 pl-5 list-disc">
                    <li>⚡ Suporte remoto e presencial para mais de 200 usuários.</li>
                    <li>💻 Manutenção de redes LAN/WAN com segurança avançada.</li>
                    <li>📊 Projetos de atualização e modernização de infraestrutura.</li>
                </ul>
            </div>
        </div>

        {/* Habilidades Técnicas */}
        <div className="max-w-3xl mb-8">
            <h2 className="text-4xl font-semibold text-green-300">🔧 Habilidades Técnicas</h2>
            <div className="grid grid-cols-2 gap-8 mt-6 text-center">
                {[
                    { icon: <FaNetworkWired />, label: "Redes", color: "text-green-400" },
                    { icon: <FaLaptopCode />, label: "Infraestrutura", color: "text-blue-400" },
                    { icon: <FaShieldAlt />, label: "Segurança TI", color: "text-yellow-400" },
                    { icon: <FaUserTie />, label: "Gestão de Suporte", color: "text-gray-400" },
                ].map((skill, idx) => (
                    <motion.div 
                        key={idx} 
                        className="flex flex-col items-center group relative overflow-hidden"
                        whileHover="hover"
                    >
                        <motion.div className={`text-5xl ${skill.color} relative`}>
                            {skill.icon}
                            <motion.div 
                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0"
                                variants={shineEffect}
                            />
                        </motion.div>
                        <span className="group-hover:text-green-300 text-xl transition-colors mt-2">{skill.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex gap-6 justify-center mt-10">
            {[
                { icon: <FaGithub />, label: "GitHub", link: "https://github.com/RenatofilhoDevandtech" },
                { icon: <FaLinkedin />, label: "LinkedIn", link: "https://linkedin.com/in/renato-filho-devandtech" },
            ].map((social, idx) => (
                <motion.a 
                    key={idx} 
                    href={social.link}
                    className="flex items-center gap-3 text-green-400 text-xl font-semibold hover:text-green-500 transition duration-200 relative"
                    whileHover="hover"
                >
                    <motion.div className="text-4xl relative">
                        {social.icon}
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0"
                            variants={shineEffect}
                        />
                    </motion.div>
                    {social.label}
                </motion.a>
            ))}
        </div>
    </motion.section>
);

export default CurriculoRenato;
