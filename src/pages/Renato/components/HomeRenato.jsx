import { motion as Motion } from "framer-motion";
import PerfilRenato from "/src/assets/PerfilRenato.png";

const HomeRenato = () => {
    return (
        <Motion.section
            className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 sm:px-6 md:px-12 py-10 sm:py-14 md:py-16 shadow-xl border border-gray-800 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Imagem do usuário com formato pentagonal e efeitos */}
            <Motion.div
                className="relative flex justify-center md:justify-end md:mr-10 lg:mr-16"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Moldura com efeito hover */}
                <div className="w-40 sm:w-48 md:w-64 lg:w-80 h-40 sm:h-48 md:h-64 lg:h-80 overflow-hidden border-4 border-green-400 shadow-lg group relative"
                    style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}>
                    
                    {/* Imagem responsiva */}
                    <Motion.img
                        src={PerfilRenato}
                        alt="Renato Filho"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:brightness-125 group-hover:shadow-xl"
                        whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                    />
                </div>
            </Motion.div>

            {/* Informações principais */}
            <div className="text-center md:text-left max-w-screen-md">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-300 tracking-wide animate-pulse">
                    💡 Transformando Tecnologia em Soluções!
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mt-4 sm:mt-6 leading-relaxed">
                    🚀 Desenvolvedor apaixonado por inovação, resolvo desafios com código e criatividade. 
                    Tenho experiência em front-end, back-end e infra, criando soluções digitais de impacto.
                </p>

                {/* Barra de Efeito Futurista */}
                <div className="w-24 sm:w-32 md:w-40 h-1 mt-4 sm:mt-6 bg-green-400 rounded-full animate-pulse"></div>

                {/* Botão de Ação com hover tecnológico */}
                <Motion.button
                    className="mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-lg font-semibold bg-green-500 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 hover:shadow-glow shadow-md"
                    whileHover={{ scale: 1.1 }}
                >
                    🔥 Me Contrate! Vamos criar algo incrível!
                </Motion.button>
            </div>
        </Motion.section>
    );
};

export default HomeRenato;
