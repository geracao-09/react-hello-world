const sobreMim = require('../SobreMim/sobreMim.json');
const curriculo = require('../Curriculo/curriculo.json');

const Theo = () => {
    return (
        <>
            {/* Importando os JSONs */}
            {(() => {
                // Importa os arquivos JSON

                return (
                    <div style={{ maxWidth: 800, margin: '0 auto', fontFamily: 'sans-serif', padding: 24 }}>
                        <section style={{ marginBottom: 40 }}>
                            <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: 8 }}>Sobre Mim</h2>
                            <p style={{ fontSize: 18, color: '#444' }}>{sobreMim.descricao}</p>
                            {sobreMim.habilidades && (
                                <ul>
                                    {sobreMim.habilidades.map((hab, idx) => (
                                        <li key={idx}>{hab}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                        <section>
                            <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: 8 }}>Currículo</h2>
                            {curriculo.experiencias && (
                                <div>
                                    <h3>Experiências</h3>
                                    <ul>
                                        {curriculo.experiencias.map((exp, idx) => (
                                            <li key={idx}>
                                                <strong>{exp.cargo}</strong> em {exp.empresa} ({exp.periodo})
                                                <div style={{ fontSize: 14, color: '#666' }}>{exp.descricao}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {curriculo.formacao && (
                                <div>
                                    <h3>Formação</h3>
                                    <ul>
                                        {curriculo.formacao.map((form, idx) => (
                                            <li key={idx}>
                                                <strong>{form.curso}</strong> - {form.instituicao} ({form.ano})
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </section>
                    </div>
                );
            })()}
        </>
    );
}

export default Theo;