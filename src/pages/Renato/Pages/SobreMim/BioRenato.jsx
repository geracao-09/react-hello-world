import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import PerfilRenato from "/src/assets/PerfilRenato.png";
const Renato = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white px-12 py-16 shadow-xl border border-gray-800 rounded-lg">
      {" "}
      {/* Avatar com formato pentagonal e efeito tech */}{" "}
      <div className="flex flex-col items-center text-center md:w-1/2">
        {" "}
        <div
          className="w-48 h-48 md:w-64 md:h-64 overflow-hidden border-4 border-green-400 shadow-lg group relative"
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          }}
        >
          {" "}
          <img
            src={PerfilRenato}
            alt="Renato Filho"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:brightness-125 group-hover:shadow-xl"
          />{" "}
        </div>{" "}
        <h1 className="text-5xl font-extrabold text-green-300 mt-6">
          Renato Filho
        </h1>{" "}
        <p className="text-lg text-gray-400 font-medium mt-2">
          Desenvolvedor Front-end | Analista de Suporte
        </p>{" "}
      </div>{" "}
      {/* Informações principais */}{" "}
      <div className="md:w-1/2 text-center md:text-left">
        {" "}
        <h2 className="text-4xl font-semibold text-green-400">
          Sobre Mim
        </h2>{" "}
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          {" "}
          🚀 Apaixonado por desenvolvimento web e tecnologia, tenho habilidades
          sólidas em <span className="text-green-400 font-bold">
            React
          </span> e <span className="text-blue-400 font-bold">Node.js</span>,
          criando <strong>soluções eficientes e inovadoras</strong>.{" "}
        </p>{" "}
        {/* Barra futurista */}{" "}
        <div className="w-32 h-1 mt-6 bg-green-400 rounded-full animate-pulse"></div>{" "}
        {/* Habilidades Técnicas */}{" "}
        <div className="mt-6 grid grid-cols-3 gap-6 text-lg text-gray-300">
          {" "}
          {[
            { icon: <FaReact />, label: "React", color: "text-blue-400" },
            { icon: <FaNodeJs />, label: "Node.js", color: "text-green-400" },
            { icon: <FaJs />, label: "JavaScript", color: "text-yellow-400" },
            { icon: <FaHtml5 />, label: "HTML", color: "text-orange-400" },
            { icon: <FaCss3Alt />, label: "CSS", color: "text-blue-400" },
          ].map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              {" "}
              <div
                className={`text-4xl ${skill.color} group-hover:shadow-xl group-hover:brightness-125 transition-transform duration-300`}
              >
                {" "}
                {skill.icon}{" "}
              </div>{" "}
              <span className="group-hover:text-green-300 transition-colors">
                {skill.label}
              </span>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Meu Objetivo */}{" "}
        <div className="mt-6">
          {" "}
          <h2 className="text-2xl font-semibold text-green-400">
            Meu Objetivo
          </h2>{" "}
          <p className="text-lg text-gray-300 mt-2 leading-relaxed">
            {" "}
            🚀 Busco uma oportunidade para trabalhar em **projetos de alto
            impacto**, transformando ideias em **aplicações inovadoras**. 💡 Se
            você busca um **desenvolvedor comprometido**, vamos conversar!{" "}
          </p>{" "}
        </div>{" "}
        {/* Links com Ícones */}{" "}
        <div className="flex gap-6 justify-center mt-6">
          {" "}
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 text-lg font-semibold hover:text-green-500 transition duration-200"
          >
            {" "}
            <FaGithub className="text-3xl group-hover:shadow-xl group-hover:brightness-125 transition-transform duration-300" />{" "}
            GitHub{" "}
          </a>{" "}
          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 text-lg font-semibold hover:text-green-500 transition duration-200"
          >
            {" "}
            <FaLinkedin className="text-3xl group-hover:shadow-xl group-hover:brightness-125 transition-transform duration-300" />{" "}
            LinkedIn{" "}
          </a>{" "}
        </div>{" "}
        {/* Botão de Contato */}{" "}
        <a
          href="mailto:renatoservicesti@gmail.com"
          className="mt-8 inline-block px-8 py-3 text-lg font-semibold bg-green-500 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 shadow-md"
        >
          {" "}
          ✉️ Entre em Contato{" "}
        </a>{" "}
      </div>{" "}
    </section>
  );
};
export default Renato;
