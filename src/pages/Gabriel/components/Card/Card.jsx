const Card = ({ title, description, url, img }) => {
    return (
        <section id="projetos">
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-80 hover:shadow-xl transition">
                <img
                    src={img}
                    alt={`Imagem do projeto ${title}`}
                    className="w-full h-48 object-cover"
                />
                <div className="p-5">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
                    <p className="text-gray-600 mb-4 text-sm">{description}</p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Ver no GitHub
                    </a>
                </div>
            </div>
        </section>   
    );
};

export default Card;
