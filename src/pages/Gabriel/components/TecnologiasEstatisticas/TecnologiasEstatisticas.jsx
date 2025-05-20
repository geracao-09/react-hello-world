import React from 'react';

const TecnologiasEstatisticas = () => {
  return (
    <section id="tecnologias" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Título estatísticas */}
        <h2 className="text-3xl font-semibold mb-8 text-indigo-600 text-center">
          📊 Estatísticas do GitHub
        </h2>

        {/* Estatísticas lado a lado e centralizadas */}
        <div className="flex flex-row justify-center items-center gap-x-8 mb-12 flex-wrap">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=GabrielCordeiroBarrosoTeles&layout=compact&langs_count=20&theme=dark"
            alt="Linguagens mais usadas no GitHub"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=GabrielCordeiroBarrosoTeles&theme=dark"
            alt="Streak de contribuições no GitHub"
          />
        </div>

        {/* Título tecnologias */}
        <h2 className="text-3xl font-semibold mb-8 text-indigo-600 text-center">
          🛠 Tecnologias que Eu Uso
        </h2>

        {/* Ícones das tecnologias */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            ["https://raw.githubusercontent.com/GabrielCordeiroBarrosoTeles/Imgs_repositorios/refs/heads/main/perfil/sap.png", "ABAP"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Swift.svg", "Swift"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg", "HTML"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg", "CSS"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Bootstrap.svg", "Bootstrap"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg", "Tailwind CSS"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg", "JavaScript"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg", "TypeScript"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg", "Node.js"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg", "React"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/GoLang.svg", "Go"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/PHP-Dark.svg", "PHP"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Laravel-Dark.svg", "Laravel"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Docker.svg", "Docker"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MySQL-Dark.svg", "MySQL"],
            ["https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg", "MongoDB"]
            
          ].map(([src, alt], index) => (
            <img
              key={index}
              src={src}
              alt={alt}
              style={{ height: '30px', width: 'auto' }}
              title={alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TecnologiasEstatisticas;
