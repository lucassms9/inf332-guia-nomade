const modos = [
    {
        id: 1,
        codigo: "trabalho",
        descricao: "Trabalho",
        icon: "",
    },
    {
        id: 2,
        codigo: "ferias",
        descricao: "Férias",
        icon: "",
    },    
];

exports.listar = (req, res) => {
    res.json(modos);
};

exports.obterPorId = (req, res) => {
    const {id} = req.params; 
    const modo = modos.find(modo => modo.id == id || modo.codigo === id);

    if (modo) {
        res.json(modo);
    } else {
        res.status(404).json({ id, message: "não encontrado." });
    }
};