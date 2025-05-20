import React, { useEffect, useRef } from "react";
import BioRenato from "./Pages/SobreMim/BioRenato";
import CurriculoRenato from "./Pages/Curriculo/CurriculoRenato";
import { useNavigate } from "react-router-dom";

const MatrixEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = "<>+-/{}/function React return let const".split("");
        const fontSize = 18;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        const drawMatrix = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa apenas o fundo sem tela preta
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00ff00"; // Cor neon para efeito Matrix
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(drawMatrix, 50);
        return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>;
};

function Renato() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 overflow-hidden">
            <MatrixEffect /> {/* Efeito Matrix corrigido */}

            <div className="relative max-w-2xl text-center shadow-lg p-6 rounded-lg border border-gray-700 bg-gray-800 backdrop-blur-md">
                <h1 className="text-5xl font-extrabold text-green-400 animate-pulse tracking-wide">Renato Filho</h1>
                <p className="text-lg mt-2 text-gray-300">
                    🚀 Resolver grandes desafios usando tecnologia me motiva!
                </p>

                {/* Seção de Biografia */}
                <div className="mt-6">
                    <BioRenato />
                </div>

                {/* Seção de Currículo */}
                <div className="mt-6">
                    <CurriculoRenato />
                </div>

                {/* Botão de Voltar */}
                <button 
                    onClick={() => navigate("/")}
                    className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 shadow-md"
                >
                    🔙 Voltar à Página Inicial
                </button>
            </div>
        </div>
    );
}

export default Renato;
