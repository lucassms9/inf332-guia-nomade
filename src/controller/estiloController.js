const estilos = [
    {
        id: 1,
        codigo: "nomadedigital",
        descricao: "Nômade Digital",
        icon: "",
    },
    {
        id: 2,
        codigo: "turismocultural",
        descricao: "Turismo Cultural",
        icon: "",
    },
    {
        id: 3,
        codigo: "aventuraesportes",
        descricao: "Aventura Esportes",
        icon: "",
    },
    {
        id: 4,
        codigo: "ecoturismonatureza",
        descricao: "Ecoturismo Natureza",
        icon: "",
    },
    {
        id: 5,
        codigo: "viagemdeluxo",
        descricao: "Luxo",
        icon: "",
    },
    {
        id: 6,
        codigo: "mochilao",
        descricao: "Mochilão",
        icon: "",
    },
];

exports.listar = (req, res) => {
    res.json(estilos);
};

exports.obterPorId = (req, res) => {
    const {id} = req.params;    
    const estilo = estilos.find(estilo => estilo.id == id || estilo.codigo === id);

    if (estilo) {
        res.json(estilo);
    } else {
        res.status(404).json({ id, message: "não encontrado." });
    }
};