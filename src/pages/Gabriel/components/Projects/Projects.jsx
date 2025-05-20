import Card from "../Card/Card";

const Projects = () => {
    const projectList = [
        {
            title: "Rocha Barber",
            description: "Site institucional responsivo em React + Vite, com design Mobile First. Inclui seções de serviços, galeria, depoimentos e formulário de contato. Deploy via Vercel/GitHub Pages.",
            url: "https://github.com/GabrielCordeiroBarrosoTeles/rocha-barber",
            img: "https://raw.githubusercontent.com/GabrielCordeiroBarrosoTeles/Imgs_repositorios/main/rocha-barber/header.png"
        },
        {
            title: "Nota Fiscal",
            description: "Sistema PHP MVC para gerenciar serviços de refrigeração: área pública, painel administrativo e seção técnica. Autenticação por sessões, PDO com prepared statements e CSRF.",
            url: "https://github.com/GabrielCordeiroBarrosoTeles/Projeto_NotaFiscal",
            img: "https://raw.githubusercontent.com/GabrielCordeiroBarrosoTeles/Imgs_repositorios/refs/heads/main/Sistema_NF/img8.png"
        },
        {
            title: "Simão Refrigeração",
            description: "Sistema PHP MVC para gerenciar serviços de refrigeração: área pública, painel administrativo e seção técnica. Autenticação por sessões, PDO com prepared statements e CSRF.",
            url: "https://github.com/GabrielCordeiroBarrosoTeles/simaorefrigeracao",
            img: "https://raw.githubusercontent.com/GabrielCordeiroBarrosoTeles/Imgs_repositorios/main/simaorefrigeracao/dashboardAdmin.png"
        }
    ];

    return (
        <section className="py-8 px-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Meus Projetos</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {projectList.map((project, index) => (
                    <Card
                    key={index}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    img={project.img}
                />
                
                ))}
            </div>
        </section>
    );
};

export default Projects;
