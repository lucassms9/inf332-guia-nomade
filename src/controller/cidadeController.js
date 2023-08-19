const cidades = [
    {
        "nome": "Cidade do México",
        "ll": "19.4326,-99.1332",
        "pais": "México"
    },
    {
        "nome": "Nova Iorque",
        "ll": "40.7128,-74.0060",
        "pais": "Estados Unidos"
    },
    {
        "nome": "Londres",
        "ll": "51.5074,-0.1278",
        "pais": "Reino Unido"
    },
    {
        "nome": "Paris",
        "ll": "48.8566,2.3522",
        "pais": "França"
    },
    {
        "nome": "Tóquio",
        "ll": "35.682839,139.759455",
        "pais": "Japão"
    },
    {
        "nome": "Pequim",
        "ll": "39.9042,116.4074",
        "pais": "China"
    },
    {
        "nome": "Roma",
        "ll": "41.9028,12.4964",
        "pais": "Itália"
    },
    {
        "nome": "Buenos Aires",
        "ll": "-34.6118,-58.4173",
        "pais": "Argentina"
    },
    {
        "nome": "Bogotá",
        "ll": "4.6097,-74.0817",
        "pais": "Colômbia"
    },
    {
        "nome": "Cidade da Guatemala",
        "ll": "14.634915,-90.506882",
        "pais": "Guatemala"
    },
    {
        "nome": "Cidade de Panamá",
        "ll": "8.9824,-79.5199",
        "pais": "Panamá"
    },
    {
        "nome": "Cidade de Belize",
        "ll": "17.5047,-88.1962",
        "pais": "Belize"
    },
    {
        "nome": "Cidade de San Salvador",
        "ll": "13.6989,-89.1914",
        "pais": "El Salvador"
    },
    {
        "nome": "Cidade de San José",
        "ll": "9.9357,-84.0719",
        "pais": "Costa Rica"
    },
    {
        "nome": "Cidade de Santo Domingo",
        "ll": "18.4861,-69.9312",
        "pais": "República Dominicana"
    },
    {
        "nome": "Cidade de Havana",
        "ll": "23.1136,-82.3666",
        "pais": "Cuba"
    },
    {
        "nome": "Rio Branco",
        "ll": "-9.9746,-67.8249",
        "pais": "Brasil"
    },
    {
        "nome": "Maceió",
        "ll": "-9.6498,-35.7089",
        "pais": "Brasil"
    },
    {
        "nome": "Macapá",
        "ll": "0.0356,-51.0694",
        "pais": "Brasil"
    },
    {
        "nome": "Manaus",
        "ll": "-3.1190,-60.0217",
        "pais": "Brasil"
    },
    {
        "nome": "Salvador",
        "ll": "-12.9716,-38.5014",
        "pais": "Brasil"
    },
    {
        "nome": "Fortaleza",
        "ll": "-3.7172,-38.5433",
        "pais": "Brasil"
    },
    {
        "nome": "Brasília",
        "ll": "-15.7801,-47.9292",
        "pais": "Brasil"
    },
    {
        "nome": "Vitória",
        "ll": "-20.3155,-40.3128",
        "pais": "Brasil"
    },
    {
        "nome": "Goiânia",
        "ll": "-16.6809,-49.2532",
        "pais": "Brasil"
    },
    {
        "nome": "São Luís",
        "ll": "-2.5387,-44.2825",
        "pais": "Brasil"
    },
    {
        "nome": "Cuiabá",
        "ll": "-15.5989,-56.0949",
        "pais": "Brasil"
    },
    {
        "nome": "Campo Grande",
        "ll": "-20.4683,-54.6246",
        "pais": "Brasil"
    },
    {
        "nome": "Belo Horizonte",
        "ll": "-19.9167,-43.9345",
        "pais": "Brasil"
    },
    {
        "nome": "Belém",
        "ll": "-1.4550,-48.5028",
        "pais": "Brasil"
    },
    {
        "nome": "João Pessoa",
        "ll": "-7.1153,-34.8641",
        "pais": "Brasil"
    },
    {
        "nome": "Curitiba",
        "ll": "-25.4195,-49.2646",
        "pais": "Brasil"
    },
    {
        "nome": "Recife",
        "ll": "-8.0476,-34.8770",
        "pais": "Brasil"
    },
    {
        "nome": "Teresina",
        "ll": "-5.0919,-42.8037",
        "pais": "Brasil"
    },
    {
        "nome": "Rio de Janeiro",
        "ll": "-22.9068,-43.1729",
        "pais": "Brasil"
    },
    {
        "nome": "Natal",
        "ll": "-5.7945,-35.2110",
        "pais": "Brasil"
    },
    {
        "nome": "Porto Alegre",
        "ll": "-30.0346,-51.2177",
        "pais": "Brasil"
    },
    {
        "nome": "Porto Velho",
        "ll": "-8.7619,-63.9039",
        "pais": "Brasil"
    },
    {
        "nome": "Boa Vista",
        "ll": "2.8215,-60.6711",
        "pais": "Brasil"
    },
    {
        "nome": "Florianópolis",
        "ll": "-27.5954,-48.5480",
        "pais": "Brasil"
    },
    {
        "nome": "São Paulo",
        "ll": "-23.5505,-46.6333",
        "pais": "Brasil"
    },
    {
        "nome": "Aracaju",
        "ll": "-10.9472,-37.0731",
    "pais": "Brasil"
    },
    {
        "nome": "Palmas",
    "ll": "-10.2396,-48.3563",
    "pais": "Brasil"
    }
];


exports.listar = (req, res) => {
    res.json(cidades);
};

exports.obterPorNome = (req, res) => {
    let {nome} = req.params;    
    nome = nome || "";
    nome = nome.toLowerCase();
    const cidade = cidades.find(c => c.nome.toLocaleLowerCase() === nome || c.pais.toLocaleLowerCase() === nome);

    if (cidade) {
        res.json(cidade);
    } else {
        res.status(404).json({ nome, message: "não encontrado." });
    }
};