const profissoes = [
    { 
        id: 1, 
        descricao: "Profissionais de TI",  
    },
    {
        id: 2,
        descricao: "Designers",
    },
    {
        id: 3,
        descricao: "Redatores"
    },
    {
        id: 4, 
        descricao: "Historiadores",
    },
    {
        id: 5,
        descricao: "Professores",
    },
    {
        id: 6,
        descricao: "Guias turísticos",
    },    
    { 
        id: 7,
        descricao: "Instrutores de esportes",
    },
    {
        id: 8,
        descricao: "Treinadores físicos",
    },
    { 
        id: 9,
        descricao: "Biólogos",
    },
    { 
        id: 10,
        descricao: "Ecologistas",
    },
    { 
        id: 11,
        descricao: "Naturalistas",
    },
    { 
        id: 12,
        descricao: "Empresários",
    },
    { 
        id: 13,
        descricao: "Executivos",
    },
    {
        id: 14,
        descricao: "Celebridades"        
    },
    { 
        id: 15,
        descricao: "Estudantes",
    },
    { 
        id: 16,
        descricao: "Artistas",
    },
    { 
        id: 17,
        descricao: "Freelancers",
    }
];

exports.listar = (req, res) => {
    res.json(profissoes);
};

exports.obterPorId = (req, res) => {
    const {id} = req.params;    
    const profissao = profissoes.find(profissao => profissao.id == id || profissao.codigo === id);

    if (profissao) {
        res.json(profissao);
    } else {
        res.status(404).json({ id, message: "não encontrado." });
    }
};