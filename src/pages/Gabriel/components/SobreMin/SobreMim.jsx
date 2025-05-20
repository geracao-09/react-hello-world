const SobreMim = () => {
    return (
        <section id="sobre" className="py-16 px-6 bg-gray-100">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
                {/* Imagem */}
                <div className="md:w-1/3 p-6">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D22AQElIZhFhL_ybQ/feedshare-shrink_2048_1536/B4DZbreQvfIAAo-/0/1747707301533?e=2147483647&v=beta&t=9Sa4EKVLNexP_BDDaLWpk5z1prOX1jSO_o1TkmdUBs0"
                        alt="Foto de Gabriel Cordeiro"
                        className="w-full h-72 object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Texto */}
                <div className="md:w-2/3 p-8 text-gray-800">
                    <h2 className="text-3xl font-semibold mb-4 text-indigo-600">👋 Olá, tudo bem com você?</h2>
                    <p className="text-lg mb-6">
                        Sou Gabriel Cordeiro, estudante de Engenharia de Software e Desenvolvedor Full Stack com experiência em PHP, JavaScript, React e ABAP. Tenho uma abordagem focada em soluções robustas e escaláveis para problemas reais.
                    </p>
                    <p className="text-lg mb-6">
                        Sou voluntário na comunidade Coda.CE e outras iniciativas que promovem o aprendizado colaborativo entre programadores.
                    </p>

                   
                </div>
            </div>
        </section>
    );
};

export default SobreMim;
