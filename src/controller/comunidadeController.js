const comunidades = [    
];

exports.listar = (req, res) => {
    res.json(comunidades);
};

exports.obterPorId = (req, res) => {
    const {id} = req.params;    
    const comunidade = comunidades.find(comunidade => comunidade.id == id || comunidade.codigo === id);

    if (comunidade) {
        res.json(comunidade);
    } else {
        res.status(404).json({ id, message: "não encontrado." });
    }
};